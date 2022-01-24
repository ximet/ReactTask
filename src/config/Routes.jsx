import { Route, Switch } from 'react-router-dom';

import Weather from '../pages/weather/Weather';
import WorldWeather from '../pages/worldWeather/WorldWeather';
import Contacts from '../pages/contacts/Contacts';

const routes = [
    {
      display: 'Weather',
      path: '/',
      component: Weather,
      isExact: true,
    },
    {
      display: 'World weather',
      path: '/worldWeather',
      component: WorldWeather
    },
    {
      display: 'Contact Us',
      path: '/contactUs',
      component: Contacts
    }
];

function Routes() {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route key={index} 
                    path={route.path}
                    component={route.component}
                    exact={route.isExact}
                />
            ))}
            {/* <Route 
                path='/'
                exact
                component={Weather}
            />
            <Route 
                path='/worldWeather'
                exact
                component={WorldWeather}
            />
            <Route 
                path='/contactUs'
                exact
                component={Contacts}
            /> */}
        </Switch>
    )
}

export default Routes;