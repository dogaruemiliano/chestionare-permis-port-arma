interface Test {
  id: string;
  questions: {
    id: string;
    body: string;
    answers: {
      id: string;
      body: string;
      isCorrect: boolean;
    }[];
  }[];
}

export default Test;
