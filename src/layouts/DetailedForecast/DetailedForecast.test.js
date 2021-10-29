import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DetailedForecast from './DetailedForecast';
import FavoriteCities from './FavoriteCities/Container';
import DailyForecast from './DailyForecast/Container';
import HourlyForecast from './HourlyForecast/Container';

configure({ adapter: new Adapter() });

describe('DetailedForecast component', () => {
  const renderDetailedForecast = () => shallow(<DetailedForecast />);

  it('Component should contain FavoriteCities component', () => {
    const DetailedForecast = renderDetailedForecast();
    const expectedResult = true;

    expect(DetailedForecast.find(FavoriteCities).exists()).toBe(expectedResult);
  });

  it('Component should contain DailyForecast component', () => {
    const DetailedForecast = renderDetailedForecast();
    const expectedResult = true;

    expect(DetailedForecast.find(DailyForecast).exists()).toBe(expectedResult);
  });

  it('Component should contain DailyForecast component', () => {
    const DetailedForecast = renderDetailedForecast();
    const expectedResult = true;

    expect(DetailedForecast.find(HourlyForecast).exists()).toBe(expectedResult);
  });
});
