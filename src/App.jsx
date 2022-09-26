import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer.js';
import { HomePage } from './components/Homepage/HomePage.js';
import * as headerStyles from './styles/Header.module.css';
import * as footerStyles from './styles/Footer.module.css';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
