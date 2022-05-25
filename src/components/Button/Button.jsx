import PropTypes from 'prop-types';
import * as S from './Button.styles';

const Button = ({ type, color, handleClick, children }) => {
  return (
    <S.StyledButton color={color} type={type} onClick={handleClick}>
      {children}
    </S.StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired
};

export default Button;
