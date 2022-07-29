import { FeedbackForm } from '../index';
import { ThemeContext } from '../../context/themeContext';
import { useContext } from 'react';
import imgJoke1 from '../../Assets/img/Joke-dark--x1000.png';
import imgJoke2 from '../../Assets/img/Joke-dark--x1000.png';

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
