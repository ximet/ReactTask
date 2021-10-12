import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CurrentCityForecastView from './views/CurrentCityForecastView/CurrentCityForecastView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/">
          <CurrentCityForecastView />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
