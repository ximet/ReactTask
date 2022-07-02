import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Header, HomePage, AboutPage, FavPage, FeedbackPage } from './Components/index';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/favourites" component={FavPage} />
      <Route path="/feedback" component={FeedbackPage} />
    </Router>
  );
}

export default App;
