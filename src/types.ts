export interface Question {
  text: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  correct: boolean;
}

export interface Result {
  title: string;
  description: string;
  minScore: number;
  maxScore?: number;
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface Score {
  name: string;
  score: number;
  date: string;
}

export type SoundType = 'correct' | 'wrong' | 'click';
