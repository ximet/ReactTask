import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';

function HeaderWrapper({ theme, onToggleTheme }) {
  return (
    <Container>
      <Header theme={theme} onToggleTheme={onToggleTheme} />
    </Container>
  );
}

export default HeaderWrapper;
