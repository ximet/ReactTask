import { mount, shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import FavoriteCityForecast from './FavoriteCityForecast';
import Preloader from '../../Preloader/Preloader';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

configure({ adapter: new Adapter() });

const initialState = {
  locationManager: {
    forecasts: []
  },
  preloaderManager: {
    favorites: {}
  }
};
const store = mockStore(initialState);

describe('FavoriteCityForecast component', () => {
  const renderComponent = props =>
    mount(
      <Provider store={store}>
        <FavoriteCityForecast {...props} />
      </Provider>
    );

  const props = {
    location: {
      id: 15,
      name: 'Minsk',
      country: 'Belarus',
      lon: 15,
      lat: 43
    }
  };

  it('Component should contain div with class additionalInfo', () => {
    const component = renderComponent(props);

    expect(component.find('div.additionalInfo').exists()).toBe(true);
  });
});
