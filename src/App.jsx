import { Route, Routes, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './routes/MainPage';
import About from './routes/About';
import NotFoundPage from './routes/NotFoundPage';
import City from './routes/City';
import Feedback from './routes/Feedback';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cities/:id" element={<City />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
