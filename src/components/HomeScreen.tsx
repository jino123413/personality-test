import React from 'react';
import { TestData } from '../types';

interface HomeScreenProps {
  tests: TestData[];
  onSelectTest: (testId: string) => void;
  lastResults: Record<string, string>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ tests, onSelectTest, lastResults }) => {
  return (
    <div className="home-screen">
      <div className="home-header">
        <h1 className="home-title">진짜 나</h1>
        <p className="home-subtitle">나를 알아가는 심리테스트</p>
      </div>

      <div className="test-list">
        {tests.map((test) => (
          <div
            key={test.id}
            className="test-card"
            onClick={() => onSelectTest(test.id)}
          >
            <div className="test-card-icon">
              <i className={test.icon}></i>
            </div>
            <div className="test-card-info">
              <h3 className="test-card-title">{test.title}</h3>
              <p className="test-card-subtitle">{test.subtitle}</p>
              {lastResults[test.id] && (
                <span className="test-card-badge">결과 보기</span>
              )}
            </div>
            <div className="test-card-arrow">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
        ))}
      </div>

      <p className="home-footer">테스트 결과는 재미로만 봐주세요 :)</p>
    </div>
  );
};

export default HomeScreen;
