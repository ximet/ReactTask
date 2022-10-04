import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import Page404 from './Pages/Page404/Page404.js';

import useAuthorize from './customHooks/useAuthorize';

import './App.css';

const App = () => {
  useAuthorize();

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
