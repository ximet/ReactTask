import * as S from './Theme/GlobalStyles';
import PropTypes from 'prop-types';

const Card = ({ children }) => <S.Card>{children}</S.Card>;

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired
};

export default Card;
