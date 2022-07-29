import { FeedbackForm } from '../index';
import { useSelector } from 'react-redux';

import imgJoke1 from '../../Assets/img/Joke-dark--x1000.png';
import imgJoke2 from '../../Assets/img/Joke-dark--x1000.png';

import styles from './FeedbackPage.module.scss';

function FeedbackPage() {
  const theme = useSelector((state) => state.theme);

  return (
    <main className={styles[`${theme}-theme`]}>
      <FeedbackForm />
    </main>
  );
}

export default FeedbackPage;
