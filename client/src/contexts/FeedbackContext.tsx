import { getFromStorage, setInStorage } from 'API/localStorage';
import { mockFeedbackData } from 'components/Data/mockFeedbackData';
import React, { createContext, FC, useState, useCallback, useEffect } from 'react';
import { Feedback } from 'types';

type FeedbackContextData = {
  feedback: Feedback[];
  addFeedback: (newFeedback: Feedback) => void;
};

const FeedbackContext = createContext<FeedbackContextData>({
  feedback: [],
  addFeedback: () => {
    return null;
  }
});

const LOCALSTORAGE_LABEL = 'feedback';

export const FeedbackProvider: FC<React.ReactNode> = ({ children }) => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  const fetchFeedback = useCallback(() => {
    const feedbackData = getFromStorage(LOCALSTORAGE_LABEL);
    setFeedback(feedbackData || mockFeedbackData);
    if (!feedbackData) setInStorage(LOCALSTORAGE_LABEL, mockFeedbackData);
  }, []);

  useEffect(() => {
    fetchFeedback();
  }, [fetchFeedback]);

  const addFeedback = (newFeedback: Feedback) => {
    setInStorage(LOCALSTORAGE_LABEL, [newFeedback, ...feedback]);
    setFeedback([newFeedback, ...feedback]);
  };
  const feedbackProviderValue = () => {
    return { feedback, addFeedback };
  };

  return (
    <FeedbackContext.Provider value={feedbackProviderValue()}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;
