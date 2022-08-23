import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';

import styles from './App.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
