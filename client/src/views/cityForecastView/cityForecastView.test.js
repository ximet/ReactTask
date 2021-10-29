import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CityForecastView from './CityForecastView';
import CityForecast from '../../layouts/cityForecast/CityForecast';
import DailyForecasts from '../../layouts/dailyForecasts/Container';
import HourlyForecasts from '../../layouts/hourlyForecasts/Container';

configure({ adapter: new Adapter() });

describe('CityForecastView component', () => {
  const renderCityForecastView = () => shallow(<CityForecastView />);

  it('Should contain CityForecast components', () => {
    const expectedResult = true;
    const CityForecastView = renderCityForecastView();
    expect(CityForecastView.find(CityForecast).exists()).toBe(expectedResult);
  });

  it('Should contain HourlyForecasts components', () => {
    const expectedResult = true;
    const CityForecastView = renderCityForecastView();
    expect(CityForecastView.find(HourlyForecasts).exists()).toBe(expectedResult);
  });

  it('Should contain DailyForecasts components', () => {
    const expectedResult = true;
    const CityForecastView = renderCityForecastView();
    expect(CityForecastView.find(DailyForecasts).exists()).toBe(expectedResult);
  });
});
