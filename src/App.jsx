import { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, HomePage, AboutPage, FavPage, FeedbackPage, Footer } from './Components/index';
import { ThemeContext } from './context/themeContext';

import styles from './App.module.scss';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles[`${theme}-theme`]}>
      <Router>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/favourites" component={FavPage} />
        <Route path="/feedback" component={FeedbackPage} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
