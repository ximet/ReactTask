import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';

function HeaderWrapper({themeMode, toggleThemeMode}) {
  return (
    <Container>
      <Header themeMode={themeMode} toggleThemeMode={toggleThemeMode} />
    </Container>
  );
}

export default HeaderWrapper;
