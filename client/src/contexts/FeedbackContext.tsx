import { getFromStorage, setInStorage } from 'API/localStorage';
import { mockFeedbackData } from 'assets/Data/mockFeedbackData';
import { FEEDBACK_LOCALSTORAGE_LABEL } from 'constants/labels';
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
export const FeedbackProvider: FC<React.ReactNode> = ({ children }) => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  const fetchFeedback = useCallback(() => {
    const feedbackData = getFromStorage(FEEDBACK_LOCALSTORAGE_LABEL);
    setFeedback(feedbackData || mockFeedbackData);
    if (!feedbackData) setInStorage(FEEDBACK_LOCALSTORAGE_LABEL, mockFeedbackData);
  }, []);

  useEffect(() => {
    fetchFeedback();
  }, [fetchFeedback]);

  const addFeedback = (newFeedback: Feedback) => {
    const updatedFeedbackData = [newFeedback, ...feedback];
    setInStorage(FEEDBACK_LOCALSTORAGE_LABEL, updatedFeedbackData);
    setFeedback(updatedFeedbackData);
  };

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
