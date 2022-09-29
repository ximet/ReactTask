export type FeedbackState = {
  name: string;
  email: string;
  feedback: string;
  phone: string;
  rating: number;
};

export type FeedbackInDB = {
  id: number;
} & FeedbackState;
