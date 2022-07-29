import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, HomePage, AboutPage, FavPage, FeedbackPage, Footer } from './Components/index';
import { useSelector } from 'react-redux';

import styles from './App.module.scss';

function App() {
  const theme = useSelector((state) => state.theme);

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
