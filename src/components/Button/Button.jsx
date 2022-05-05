import * as S from './Button.styles';

const Button = ({ type, color, handleClick, children }) => {
  return (
    <S.StyledButton color={color} type={type} onClick={handleClick}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
