import classes from './App.scss';

import Header from './components/header/Header';
import Side from './components/side/Side';
import MainPage from './components/mainPage/MainPage';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={`${classes.container} ${classes.app_container}`}>
        <Header />
        <div className={classes.container}>
          <Side />
          <MainPage />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
