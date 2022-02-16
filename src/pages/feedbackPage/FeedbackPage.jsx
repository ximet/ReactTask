import classes from './feedbackPage.scss';
import Form from '../../components/form/Form';

function FeedbackPage() {
  return (
    <div className={classes.feedbackPage}>
      <h2 className={classes.title}>We value your feedback</h2>
      <p className={classes.description}>
        Please fill out the form and help us improve the quality of the site
      </p>
      <Form />
    </div>
  );
}

export default FeedbackPage;