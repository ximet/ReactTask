export type FeedbackState = {
  id: number;
  name: string;
  email: string;
  feedback: string;
  phone: string;
  rating: number;
};

export type FeedbackInDB = {
  id: number;
} & FeedbackState;
