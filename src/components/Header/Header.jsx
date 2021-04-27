import PropTypes from 'prop-types';
import * as Styled from '../../styles/globalStyles';
import { THEMES } from '../../common/constants';

const Header = ({ onClick, mode, className }) => {
  return (
    <header className={className}>
      <p>Weather Forecast</p>
      <Styled.Navigation>
        <Styled.Link to="/home">Home</Styled.Link>
        <Styled.Link to="/about">About</Styled.Link>
        <Styled.Link to="/feedback">Feedback</Styled.Link>
      </Styled.Navigation>
      <Styled.Button onClick={onClick}>
        Go {mode === THEMES.dark ? THEMES.light : THEMES.dark}
      </Styled.Button>
    </header>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Header;
