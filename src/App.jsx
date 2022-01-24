import classes from './App.scss';

import Header from './components/header/Header';
import Side from './components/side/Side';
import Main from './components/main/Main';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={`${classes.container} ${classes.container_vertical}`}>
        <Header />
        <div className={`${classes.container} ${classes.container_horizontal}`}>
          <Side />
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
