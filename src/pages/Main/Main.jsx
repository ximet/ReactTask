import { Route, Switch } from 'react-router';
import { LOCATIONS_PAGE_LINK } from '../../constants/constants';
import LocationsSearchContainer from '../../containers/LocationsSearchContainer';
import LocationWeatherContainer from '../../containers/LocationWeatherContainer';

function Main() {
  return (
    <Switch>
      <Route exact path="/">
        <LocationWeatherContainer />
      </Route>
      <Route exact path={`${LOCATIONS_PAGE_LINK}`}>
        <LocationsSearchContainer />
      </Route>
      <Route path={`${LOCATIONS_PAGE_LINK}/:id`}>
        <LocationWeatherContainer />
      </Route>
    </Switch>
  );
}

export default Main;
