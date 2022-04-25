import * as S from './Spinner.styles';

const Spinner = () => {
  return (
    <S.SpinnerWrapper>
      <S.StyledSpinner viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="3" />
      </S.StyledSpinner>
    </S.SpinnerWrapper>
  );
};

export default Spinner;
