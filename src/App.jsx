import classes from './App.scss';

import Header from './components/header/Header';
import Side from './components/side/Side';
import MainPage from './components/mainPage/MainPage';
import Footer from './components/footer/Footer';

import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className={`${classes.container} ${classes.app_container}`}>
        <Header />
        <div className={classes.container}>
          <Side />
          <MainPage />
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
