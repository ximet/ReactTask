import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import FeedbackList from 'components/FeedbackList/FeedbackList';
import FeedbackStats from 'components/FeedbackStats/FeedbackStats';
import SecondaryPagesLayout from 'components/layouts/SecondaryPagesLayout';
import { FeedbackProvider } from 'contexts/FeedbackContext';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFeedback } from 'redux/actions';
import styles from './styles.module.scss';

const Feedback = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedback());
  }, [dispatch]);

  return (
    <SecondaryPagesLayout>
      <h2 className={styles.title}>Leave your Feedback</h2>
      <FeedbackProvider>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </FeedbackProvider>
    </SecondaryPagesLayout>
  );
};

export default Feedback;
