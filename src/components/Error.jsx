import { useHistory } from 'react-router-dom';
import errorPhoto from '../../public/404.jpg';
import * as Styled from '../styles/globalStyles';

const Error = () => {
  const history = useHistory();
  return (
    <div>
      <img src={errorPhoto} alt="error photo" />
      <h1>Oh, no, did you get lost? Don't worry.</h1>
      <Styled.Button onClick={() => history.push('/home')}>Here's you way back!</Styled.Button>
    </div>
  );
};

export default Error;
