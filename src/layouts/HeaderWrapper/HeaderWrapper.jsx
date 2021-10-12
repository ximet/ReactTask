import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';

function HeaderWrapper({ theme, onToggleTheme }) {
  return (
    <Container>
      <Header theme={theme} onToggleTheme={onToggleTheme} />
    </Container>
  );
}

HeaderWrapper.propTypes = {
  theme: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired
};

export default HeaderWrapper;
