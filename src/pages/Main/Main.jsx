import { Route, Switch } from 'react-router';
import {
  ABOUT_US_PAGE_LINK,
  CONTACT_US_PAGE_LINK,
  LOCATIONS_PAGE_LINK
} from '../../constants/constants';
// import LocationsSearchContainer from '../../containers/LocationsSearchContainer';
import LocationWeatherContainer from '../../containers/LocationWeatherContainer';
import About from '../../components/About/About';
import ContactUs from '../../components/ContactUs/ContactUs';

function Main() {
  return (
    <Switch>
      <Route exact path="/">
        <LocationWeatherContainer />
      </Route>
      {/* <Route exact path={`${LOCATIONS_PAGE_LINK}`}>
        <LocationsSearchContainer />
      </Route> */}
      <Route exact path={`${ABOUT_US_PAGE_LINK}`}>
        <About />
      </Route>
      <Route exact path={`${CONTACT_US_PAGE_LINK}`}>
        <ContactUs />
      </Route>
      <Route path={`${LOCATIONS_PAGE_LINK}/:id`}>
        <LocationWeatherContainer />
      </Route>
    </Switch>
  );
}

export default Main;
