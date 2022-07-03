import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Header, HomePage, AboutPage, FavPage, FeedbackPage, Footer } from './Components/index';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/favourites" component={FavPage} />
      <Route path="/feedback" component={FeedbackPage} />
      <Footer />
    </Router>
  );
}

export default App;
