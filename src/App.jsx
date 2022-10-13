import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer.js';
import { HomePage } from './components/Homepage/HomePage.js';
import { AboutPage } from './components/AboutPage/AboutPage.js';
import { ErrorPage } from './components/ErrorPage/ErrorPage.js';
import * as appStyles from './styles/App.module.css';
import { useAuthorize } from './customHooks/useAuthorize.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  useAuthorize();

  return (
    <>
      {/* <Header />
      <main> */}
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      {/* </main>
      <Footer /> */}
    </>
  );
}

export default App;
