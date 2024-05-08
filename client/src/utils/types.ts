// Query Types

export type PageDataQuery = {
  isPending: boolean;
  data: PageDataResponse;
  error: Error | null;
};

// Response Types

export type PageDataResponse = {
  questions: string[];
  description: string;
};

export type QuestionResponse = {
  data: string;
};
