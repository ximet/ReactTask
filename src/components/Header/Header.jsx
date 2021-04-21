import * as S from '../Theme/GlobalStyles';

const Header = ({ onClick, mode, className }) => {
  return (
    <header className={className}>
      <p>Weather Forecast</p>
      <S.Navigation>
        <S.Links to="/home">Home</S.Links>
        <S.Links to="/about">About</S.Links>
      </S.Navigation>
      <S.Button onClick={onClick}>Go {mode === 'dark' ? 'light' : 'dark'}</S.Button>
    </header>
  );
};
export default Header;
