import { BrowserRouter } from 'react-router-dom';

import Header from './Layouts/Header/Header';
import Main from './layouts/Main/Main';
import Footer from './layouts/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
