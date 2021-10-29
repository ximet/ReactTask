import { mount, shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SearchedLocation from './SearchedLocation';

const mockStore = configureStore([thunk]);

configure({ adapter: new Adapter() });

const initialState = {
  locationManager: {
    favoriteCitiesList: [
      {
        id: 15,
        name: 'Minsk',
        country: 'Belarus',
        lon: 15,
        lat: 43
      }
    ]
  }
};
const store = mockStore(initialState);

describe('SearchedLocation component', () => {
  const renderComponent = props =>
    mount(
      <Provider store={store}>
        <SearchedLocation {...props} />
      </Provider>
    );

  it('Component should contain button with class favoriteBtn', () => {
    const props = {
      location: {
        id: 20,
        name: 'London',
        country: 'United Kingdom',
        lon: 15,
        lat: 43
      }
    };
    const component = renderComponent(props);
    const expectedResult = true;

    expect(component.find('button.favoriteBtn').exists()).toBe(expectedResult);
  });

  it('Component should contain button with class active', () => {
    const props = {
      location: {
        id: 15,
        name: 'Minsk',
        country: 'Belarus',
        lon: 15,
        lat: 43
      }
    };
    const component = renderComponent(props);
    const expectedResult = true;

    expect(component.find('button.favoriteBtn').exists()).toBe(expectedResult);
  });

  it('After click button should be active', () => {
    const props = {
      location: {
        id: 20,
        name: 'London',
        country: 'United Kingdom',
        lon: 15,
        lat: 43
      }
    };
    const component = renderComponent(props);
    const button = component.find('button.favoriteBtn');
    const expectedResult = true;

    button.simulate('click');
    expect(component.find('button.favoriteBtn.active').exists()).toBe(expectedResult);
  });
});
