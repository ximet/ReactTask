import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';

import useAuthorize from './customHooks/useAuthorize';

import './App.css';

const App = () => {
  useAuthorize();

  return (
    <div className="app-container">
      <Header />
      <main>
        <DropDownMenu />
      </main>
      <Footer />
    </div>
  );
};

export default App;
