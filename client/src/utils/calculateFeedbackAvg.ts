import { Feedback } from 'types';

export const calculateFeedbackAvg = (feedback: Feedback[]): number => {
  const feedbackRatingAvg = feedback.reduce(
    (prev: number, current: Feedback, index: number, array: Feedback[]): number => {
      const sum = prev + +current.rating / array.length;
      return sum;
    },
    0
  );
  return feedbackRatingAvg;
};
