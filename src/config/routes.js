import { Home, About, Contact, CityWeather, NotFound, HourlyForecast } from '../pages';
import { translations } from '../utils/translations';

export const routes = [
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
    path: '/weather/:city/:id',
    Component: HourlyForecast,
    isExact: true,
    title: translations.msg_page_hourly_forecast_title
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
