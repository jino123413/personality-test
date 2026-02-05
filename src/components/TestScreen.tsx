import React, { useState, useCallback } from 'react';
import { TestData, TestResult, UserAnswer } from '../types';

interface TestScreenProps {
  test: TestData;
  onComplete: (result: TestResult) => void;
  onBack: () => void;
}

const TestScreen: React.FC<TestScreenProps> = ({ test, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [slideIn, setSlideIn] = useState(false);

  const totalQuestions = test.questions.length;
  const question = test.questions[currentQuestion];

  const calculateResult = useCallback(
    (allAnswers: UserAnswer[]): TestResult => {
      const totalScores: Record<string, number> = {};

      allAnswers.forEach((answer) => {
        Object.entries(answer.scores).forEach(([type, score]) => {
          totalScores[type] = (totalScores[type] || 0) + score;
        });
      });

      let maxType = '';
      let maxScore = -Infinity;

      Object.entries(totalScores).forEach(([type, score]) => {
        if (score > maxScore) {
          maxScore = score;
          maxType = type;
        }
      });

      const matchedResult = test.results.find((r) => r.type === maxType);
      return matchedResult || test.results[0];
    },
    [test.results]
  );

  const handleSelectOption = useCallback(
    (scores: Record<string, number>) => {
      const newAnswer: UserAnswer = {
        questionId: question.id,
        scores,
      };

      const updatedAnswers = [...answers, newAnswer];
      setAnswers(updatedAnswers);

      if (currentQuestion < totalQuestions - 1) {
        setSlideIn(true);
        setTimeout(() => {
          setCurrentQuestion((prev) => prev + 1);
          setSlideIn(false);
        }, 300);
      } else {
        const result = calculateResult(updatedAnswers);
        try {
          const stored = localStorage.getItem('personality-test-results');
          const parsed: Record<string, string> = stored ? JSON.parse(stored) : {};
          parsed[test.id] = result.type;
          localStorage.setItem('personality-test-results', JSON.stringify(parsed));
        } catch {}
        onComplete(result);
      }
    },
    [answers, currentQuestion, totalQuestions, question.id, calculateResult, onComplete]
  );

  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="test-screen">
      <div className="test-screen-header">
        <button className="back-button" onClick={onBack}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <span className="test-screen-title">{test.title}</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className={`question-container${slideIn ? ' slide-in' : ''}`}>
        <p className="question-number">
          Q{currentQuestion + 1}. <span>{currentQuestion + 1}/{totalQuestions}</span>
        </p>
        <h2 className="question-text">{question.question}</h2>

        <div className="options-list">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="option-button"
              onClick={() => handleSelectOption(option.scores)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestScreen;
