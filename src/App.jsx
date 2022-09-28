import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import useAutorisation from './hooks/useAutorisation';

function App() {
  // useAutorisation();
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
