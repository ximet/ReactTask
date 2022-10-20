import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import Page404 from './Pages/Page404/Page404.js';
import City from './pages/City/City.js';
import Feedback from './pages/Feedback/Feedback.js';
import Toggle from './components/Toggle/Toggle';
import { themes } from './components/constants.js';

import './App.css';

import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import useAuthorize from './customHooks/useAuthorize';

import './App.css';

const App = () => {
  const [theme, setTheme] = useState('');
  const switchTheme = () =>
    theme === themes.dark ? setTheme('') : setTheme(themes.dark);

  useAuthorize();
  return (
    <div>
      <div data-theme={theme}>
        <Router>
          <Header />
          <main>
            <Toggle toggleDark={switchTheme} />
            <Provider store={store}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/city/:id" element={<City />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </Provider>
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
