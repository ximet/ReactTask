import { getFromStorage, setInStorage } from 'API/localStorage';
import { FeedbackData } from 'components/Data/FeedbackData';
import React, { createContext, FC, useState, useMemo, useCallback, useEffect } from 'react';
import { Feedback } from 'types';

type FeedbackContextData = {
  feedback: Feedback[];
  setFeedback: (feedback: Feedback[]) => void;
  addFeedback: (newFeedback: Feedback) => void;
};

const FeedbackContext = createContext<FeedbackContextData>({
  feedback: [],
  setFeedback: () => {
    return null;
  },
  addFeedback: () => {
    return null;
  }
});

export const FeedbackProvider: FC<React.ReactNode> = ({ children }) => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  const fetchFeedback = useCallback(() => {
    const feedbackData = getFromStorage('feedback');
    if (feedbackData) {
      setFeedback(feedbackData);
    } else {
      setInStorage('feedback', FeedbackData);
      setFeedback(FeedbackData);
    }
  }, [setFeedback]);

  useEffect(() => {
    fetchFeedback();
  }, [fetchFeedback]);

  const feedbackProvider = useMemo(() => {
    const addFeedback = (newFeedback: Feedback) => {
      setInStorage('feedback', [newFeedback, ...feedback]);
    };
    return { feedback, setFeedback, addFeedback };
  }, [feedback]);

  return <FeedbackContext.Provider value={feedbackProvider}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext;
