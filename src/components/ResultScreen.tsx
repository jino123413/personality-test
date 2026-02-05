import React, { useEffect, useState } from 'react';
import { TestData, TestResult } from '../types';

interface ResultScreenProps {
  test: TestData;
  result: TestResult;
  onRetakeTest: () => void;
  onOtherTest: () => void;
  onUnlockAnalysis: () => void;
  adLoading: boolean;
  analysisUnlocked: boolean;
}

const STORAGE_KEY = 'personality-test-results';

const ResultScreen: React.FC<ResultScreenProps> = ({
  test,
  result,
  onRetakeTest,
  onOtherTest,
  onUnlockAnalysis,
  adLoading,
  analysisUnlocked,
}) => {
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed: Record<string, string> = stored ? JSON.parse(stored) : {};
      parsed[test.id] = result.type;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    } catch {
      // localStorage not available
    }
  }, [test.id, result.type]);

  const analysis = result.detailedAnalysis;

  return (
    <div className="result-screen">
      <div className="result-card">
        <div className="result-emoji">{result.emoji}</div>
        <h1 className="result-title">{result.title}</h1>
        <p className="result-subtitle">{test.title}</p>
        <p className="result-description">{result.description}</p>

        <div className="result-section">
          <h3 className="result-section-title">
            <i className="ri-check-double-line"></i>
            이런 특징이 있어요
          </h3>
          <ul className="trait-list">
            {result.traits.map((trait, index) => (
              <li key={index} className="trait-item">
                <i className="ri-check-line"></i>
                <span>{trait}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="result-section">
          <h3 className="result-section-title">
            <i className="ri-lightbulb-line"></i>
            이렇게 해보세요
          </h3>
          <ul className="tip-list">
            {result.tips.map((tip, index) => (
              <li key={index} className="tip-item">
                <i className="ri-lightbulb-flash-line"></i>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 상세 분석 섹션 */}
      <div className="analysis-section">
        {analysisUnlocked ? (
          <div className="analysis-card analysis-unlocked">
            <h3 className="analysis-card-title">
              <i className="ri-heart-2-line"></i>
              나와 잘 맞는 유형
            </h3>
            <p className="analysis-match-type">{analysis.bestMatch}</p>
            <p className="analysis-match-desc">{analysis.bestMatchDescription}</p>

            <h3 className="analysis-card-title">
              <i className="ri-thunderstorms-line"></i>
              나와 안 맞는 유형
            </h3>
            <p className="analysis-match-type">{analysis.worstMatch}</p>
            <p className="analysis-match-desc">{analysis.worstMatchDescription}</p>

            <h3 className="analysis-card-title">
              <i className="ri-star-line"></i>
              같은 유형의 유명인
            </h3>
            <p className="analysis-celebrity">{analysis.celebrity}</p>
          </div>
        ) : (
          <div className="analysis-card analysis-locked">
            <div className="analysis-locked-preview">
              <i className="ri-lock-line"></i>
              <p className="analysis-locked-title">궁합 유형 · 상극 유형 · 유명인</p>
              <p className="analysis-locked-desc">나와 잘 맞는 유형은 누구일까?</p>
            </div>
            <button
              className="btn-analysis"
              onClick={onUnlockAnalysis}
              disabled={adLoading}
            >
              <span className="ad-badge">AD</span>
              {adLoading ? '로딩 중...' : '상세 분석 보기'}
            </button>
            <p className="ad-notice">광고 시청 후 상세 분석 결과를 확인합니다</p>
          </div>
        )}
      </div>

      <div className="button-group">
        <button className="btn-secondary" onClick={onRetakeTest}>
          <i className="ri-refresh-line"></i>
          다시 테스트하기
        </button>
        <button
          className="btn-primary"
          onClick={onOtherTest}
          disabled={adLoading}
        >
          <span className="ad-badge">AD</span>
          {adLoading ? '로딩 중...' : '다른 테스트 하기'}
        </button>
        <p className="ad-notice">광고 시청 후 다른 테스트를 시작합니다</p>
      </div>
    </div>
  );
};

export default ResultScreen;
