import { FeedbackForm } from '../index';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

function FeedbackPage() {
  return (
    <main>
      <FeedbackForm />
    </main>
  );
}

export default FeedbackPage;
