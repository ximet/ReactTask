import Container from '../Container/Container';
import PropTypes from 'prop-types';
import './ErrorBox.css';

function ErrorBox({ error }) {  
  return (
    <Container>
      <div className="error-box">
        Sorry, an error happened during data fetching from server. Please try again later.
      </div>
      <div className="error-box">
        Error info: {error.toString()}
      </div>
    </Container>
  );
}

export default ErrorBox;
