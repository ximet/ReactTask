import { Route, Switch } from 'react-router-dom';
import { Home, About, Contact, CityWeather, NotFound } from '../../pages';
import { translations } from '../../utils/translations';

const routes = [
  {
    path: '/',
    Component: Home,
    isExact: true,
    title: translations.msg_page_weather_system_label
  },
  {
    path: '/weather',
    Component: CityWeather,
    isExact: true,
    title: translations.msg_page_city_weather_label
  },
  {
    path: '/about',
    Component: About,
    isExact: true,
    title: translations.msg_page_about_label
  },
  {
    path: '/contacts',
    Component: Contact,
    isExact: true,
    title: translations.msg_page_contacts_label
  },

  {
    path: '/*',
    Component: NotFound,
    title: translations.msg_page_not_found_404_error
  }
];

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ path, Component, isExact, title }) => (
        <Route
          key={path}
          path={path}
          exact={isExact}
          render={() => {
            document.title = title;
            return <Component />;
          }}
        />
      ))}
    </Switch>
  );
};

export default Routes;
