import classes from'./App.scss';

import Header from './components/header/Header';
import Side from './components/side/Side';
import Main from './components/main/Main';

function App() {
  return (
    <div className={`${classes.container} ${classes.container_vertical}`}>
      <Header />
      <div className={`${classes.container} ${classes.container_horizontal}`}>
        <Side />
        <Main />
      </div>
    </div>
  );
  
}

export default App;
