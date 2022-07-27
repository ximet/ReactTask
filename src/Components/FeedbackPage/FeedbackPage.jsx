import { FeedbackForm } from '../index';
import { ThemeContext } from '../../context/themeContext';
import { useContext } from 'react';

import styles from './FeedbackPage.module.scss';

function FeedbackPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={styles[`${theme}-theme`]}>
      <FeedbackForm />
    </main>
  );
}

export default FeedbackPage;
