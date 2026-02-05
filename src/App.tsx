import React, { useState, useCallback, useEffect } from 'react';
import { TestData, TestResult } from './types';
import { spendingTypeTest } from './data/spending-type';
import { moneyPersonalityTest } from './data/money-personality';
import { decisionStyleTest } from './data/decision-style';
import HomeScreen from './components/HomeScreen';
import TestScreen from './components/TestScreen';
import ResultScreen from './components/ResultScreen';
import { useInterstitialAd } from './hooks/useInterstitialAd';

const ALL_TESTS: TestData[] = [spendingTypeTest, moneyPersonalityTest, decisionStyleTest];

const STORAGE_KEY = 'personality-test-results';

type Screen = 'home' | 'test' | 'result';

function loadLastResults(): Record<string, string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('home');
  const [currentTest, setCurrentTest] = useState<TestData | null>(null);
  const [currentResult, setCurrentResult] = useState<TestResult | null>(null);
  const [lastResults, setLastResults] = useState<Record<string, string>>(loadLastResults);
  const [unlockedAnalysis, setUnlockedAnalysis] = useState<Set<string>>(new Set());
  const { loading: adLoading, showInterstitialAd } = useInterstitialAd();

  useEffect(() => {
    if (screen === 'home') {
      setLastResults(loadLastResults());
    }
  }, [screen]);

  const handleSelectTest = useCallback((testId: string) => {
    const test = ALL_TESTS.find((t) => t.id === testId);
    if (!test) return;

    const saved = loadLastResults();
    if (saved[testId]) {
      const savedResult = test.results.find((r) => r.type === saved[testId]);
      if (savedResult) {
        setCurrentTest(test);
        setCurrentResult(savedResult);
        setScreen('result');
        return;
      }
    }

    setCurrentTest(test);
    setCurrentResult(null);
    setScreen('test');
  }, []);

  const handleTestComplete = useCallback((result: TestResult) => {
    setCurrentResult(result);
    setScreen('result');
  }, []);

  const handleRetakeTest = useCallback(() => {
    setCurrentResult(null);
    setScreen('test');
  }, []);

  const handleOtherTest = useCallback(() => {
    showInterstitialAd({
      onDismiss: () => {
        setCurrentTest(null);
        setCurrentResult(null);
        setScreen('home');
      },
    });
  }, [showInterstitialAd]);

  const handleUnlockAnalysis = useCallback(() => {
    if (!currentTest) return;
    showInterstitialAd({
      onDismiss: () => {
        setUnlockedAnalysis((prev) => new Set(prev).add(currentTest.id));
      },
    });
  }, [showInterstitialAd, currentTest]);

  const handleBackToHome = useCallback(() => {
    setCurrentTest(null);
    setCurrentResult(null);
    setScreen('home');
  }, []);

  return (
    <div className="app">
      {screen === 'home' && (
        <HomeScreen
          tests={ALL_TESTS}
          onSelectTest={handleSelectTest}
          lastResults={lastResults}
        />
      )}
      {screen === 'test' && currentTest && (
        <TestScreen
          test={currentTest}
          onComplete={handleTestComplete}
          onBack={handleBackToHome}
        />
      )}
      {screen === 'result' && currentTest && currentResult && (
        <ResultScreen
          test={currentTest}
          result={currentResult}
          onRetakeTest={handleRetakeTest}
          onOtherTest={handleOtherTest}
          onUnlockAnalysis={handleUnlockAnalysis}
          adLoading={adLoading}
          analysisUnlocked={unlockedAnalysis.has(currentTest.id)}
        />
      )}
    </div>
  );
};

export default App;
