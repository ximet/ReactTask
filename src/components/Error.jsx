import { useHistory } from 'react-router-dom';
import errorPhoto from '../../public/404.jpg';
import * as S from './Theme/GlobalStyles';

const Error = () => {
  const history = useHistory();
  return (
    <div>
      <img src={errorPhoto} alt="error photo" />
      <h1>Oh, no, did you get lost? Don't worry.</h1>
      <S.Button onClick={() => history.push('/home')}>Here's you way back!</S.Button>
    </div>
  );
};

export default Error;
