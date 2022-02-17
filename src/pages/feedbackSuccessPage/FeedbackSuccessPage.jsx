import classes from './feedbackSuccessPage.scss';
import { Link } from 'react-router-dom';

function FeedbackSuccessPage() {
  return (
    <div className={classes.successPage}>
      <div>
        <h2 className={classes.title}>Thanks for your feedback</h2>
        <p>
          <Link to="/feedback" className={classes.link}>Come back</Link>
        </p>
      </div>
    </div>
  );
}

export default FeedbackSuccessPage;
