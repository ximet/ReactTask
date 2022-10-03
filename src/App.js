import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';
import About from './components/About/About.js';

import useAuthorize from './customHooks/useAuthorize';

import './App.css';

const App = () => {
  useAuthorize();

  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
