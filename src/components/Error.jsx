import { useHistory } from 'react-router-dom';
import errorPhoto from '../../public/404.jpg';

const Error = () => {
  const history = useHistory();
  return (
    <div className="app__main">
      <img src={errorPhoto} alt="error photo" />
      <h1>Oh, no, did you get lost? Don't worry.</h1>
      <button className="button" onClick={() => history.push('/home')}>
        Here's you way back!
      </button>
    </div>
  );
};

export default Error;
