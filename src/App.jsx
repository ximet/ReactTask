import './App.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';
import RandomText from './components/RandomText.js/RandomText';


function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <DropDownMenu />
        {/* <RandomText /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
