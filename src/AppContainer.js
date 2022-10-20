import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About.js';
import Page404 from './pages/Page404/Page404.js';
import City from './pages/City/City.js';
import Feedback from './pages/Feedback/Feedback.js';
import Toggle from './components/Toggle/Toggle';

import { useThemeContext } from './context/ThemeContext';

import store from './redux/store';

const AppContainer = () => {
  const { theme } = useThemeContext();

  return (
    <div data-theme={theme}>
      <Router>
        <Header />
        <main>
          <Toggle />
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
  );
};

export default AppContainer;
