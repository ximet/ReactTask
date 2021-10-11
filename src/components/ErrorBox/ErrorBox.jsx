import Container from '../Container/Container';
import './ErrorBox.css'

function ErrorBox() {
  return (
    <Container>
      <div className="error-box">
        Sorry, an error happened during data fetching from server. Please try again later.
      </div>
    </Container>
  );
}

export default ErrorBox;
