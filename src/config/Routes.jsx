import { Route, Switch } from 'react-router-dom';

import WeatherPage from '../pages/weatherPage/WeatherPage';
import WorldWeatherPage from '../pages/worldWeatherPage/WorldWeatherPage';
import FeedbackPage from '../pages/feedbackPage/FeedbackPage';
import FeedbackSuccessPage from '../pages/feedbackSuccessPage/FeedbackSuccessPage';
import CitiesListPage from '../pages/citiesListPage/CitiesListPage';

export const routes = [
  {
    path: '/',
    component: WeatherPage,
    isExact: true
  },
  {
    path: '/world_weather',
    component: CitiesListPage,
    isExact: true
  },
  {
    path: '/feedback',
    component: FeedbackPage,
    isExact: true
  },
  {
    path: '/feedback/success',
    component: FeedbackSuccessPage
  },
  {
    path: '/world_weather/*',
    component: WorldWeatherPage
  }
];

function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.isExact}
        />
      ))}
    </Switch>
  );
}

export default Routes;
