import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header/style';
import Home from '../Home/style';
import About from '../About/style';
import Error from '../Error';
import SearchList from '../SearchList/SearchListContainer';
import Feedback from '../Feedback/FeedbackContainer';

const App = ({ className, onClick, mode }) => {
  return (
    <div className={className}>
      <Header onClick={onClick} mode={mode} />
      <Switch>
        <Redirect path="/" exact to="/home" />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/home/:location">
          <SearchList />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  onClick: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default App;
