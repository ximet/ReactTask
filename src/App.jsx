import './App.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import RandomText from './components/RandomText.js/RandomText';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <RandomText />
      </main>
      <Footer />
    </div>
  );
}

export default App;
