export interface TestOption {
  text: string;
  scores: Record<string, number>;
}

export interface TestQuestion {
  id: number;
  question: string;
  options: TestOption[];
}

export interface TestResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  tips: string[];
  color: string;
}

export interface TestData {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  questions: TestQuestion[];
  results: TestResult[];
}

export interface UserAnswer {
  questionId: number;
  scores: Record<string, number>;
}
