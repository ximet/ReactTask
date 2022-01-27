import { Route, Switch } from 'react-router-dom';

import WeatherPage from '../pages/weatherPage/WeatherPage';
import WorldWeatherPage from '../pages/worldWeatherPage/WorldWeatherPage';
import FeedbackPage from '../pages/feedbackPage/FeedbackPage';

export const routes = [
  {
    display: 'Weather',
    path: '/',
    component: WeatherPage,
    isExact: true
  },
  {
    display: 'World weather',
    path: '/worldWeather',
    component: WorldWeatherPage
  },
  {
    display: 'Feedback',
    path: '/feedback',
    component: FeedbackPage
  }
];

function Routes() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} component={route.component} exact={route.isExact} />
      ))}
    </Switch>
  );
}

export default Routes;
