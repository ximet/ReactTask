import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import MainNavigation from './components/MainNavigation/MainNavigation';
import LocationSearch from './components/LocationSearch/LocationSearch';
import CurrentTime from '../CurrentTime/CurrentTime';

configure({ adapter: new Adapter() });

describe('Header component', () => {
  const renderComponent = () => shallow(<Header />);

  it('Component should contain ThemeSelect component', () => {
    const component = renderComponent();
    expect(component.find(ThemeSelect).exists()).toBe(true);
  });

  it('Component should contain MainNavigation component', () => {
    const component = renderComponent();
    expect(component.find(MainNavigation).exists()).toBe(true);
  });

  it('Component should contain LocationSearch component', () => {
    const component = renderComponent();
    expect(component.find(LocationSearch).exists()).toBe(true);
  });

  it('Component should contain CurrentTime component', () => {
    const component = renderComponent();
    expect(component.find(CurrentTime).exists()).toBe(true);
  });
});
