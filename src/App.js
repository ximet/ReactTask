import './App.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';

const App = () => {
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
