import * as Styled from '../styles/globalStyles';
import PropTypes from 'prop-types';

const Card = ({ children }) => <Styled.Card>{children}</Styled.Card>;

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired
};

export default Card;
