<<<<<<< Updated upstream
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './routes/MainPage';
import About from './routes/About';
import NotFoundPage from './routes/NotFoundPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
=======
<<<<<<< Updated upstream
function App() {
  return <div>Hello world!</div>;
=======
import { Route, Routes, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './routes/MainPage';
import About from './routes/About';
import NotFoundPage from './routes/NotFoundPage';
import City from './routes/City';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/city/:id" element={<City />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
>>>>>>> Stashed changes
>>>>>>> Stashed changes
}

export default App;
