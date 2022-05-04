import * as S from './Button.styles';

const Button = ({ type, color, handleClick, children }) => {
  let background, border, text;

  switch (color) {
    case 'neutral':
      background = 'transparent';
      border = '#d4d4d4';
      text = '#0063CC';
      break;
    case 'outline':
      background = 'none';
      text = '#0063CC';
      border = '#0063CC';
      break;
    case 'destructive':
      background = '#CC3300';
      text = '#FEFEFE';
      break;
    case 'destructive text':
      background = 'none';
      text = '#CC3300';
      border = '#53585D';
      break;
    case 'success':
      background = '#66BB6A';
      text = '#FEFEFE';
      break;
    default:
      background = '#0063CC';
      text = '#FEFEFE';
  }

  return (
    <S.StyledButton
      background={background}
      border={border}
      text={text}
      type={type}
      onClick={handleClick}
    >
      {children}
    </S.StyledButton>
  );
};

export default Button;
