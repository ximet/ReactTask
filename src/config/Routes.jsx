import { Route, Switch } from 'react-router-dom';

import WeatherPage from '../pages/weatherPage/WeatherPage';
import WorldWeatherPage from '../pages/worldWeatherPage/WorldWeatherPage';
import FeedbackPage from '../pages/feedbackPage/FeedbackPage';
import FeedbackSuccessPage from '../pages/feedbackSuccessPage/FeedbackSuccessPage';

export const routes = [
  {
    path: '/',
    component: WeatherPage,
    isExact: true
  },
  {
    path: '/worldWeather',
    component: WorldWeatherPage
  },
  {
    path: '/feedback',
    component: FeedbackPage,
    isExact: true
  },
  {
    path: '/feedback/success',
    component: FeedbackSuccessPage
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
