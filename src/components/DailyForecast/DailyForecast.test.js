import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import DailyForecast from './DailyForecast';
import DailyItem from '../../atomic-components/DailyItem/DailyItem';

configure({ adapter: new Adapter() });

describe('DailyForecast component', () => {
  const wrapper = shallow(<DailyForecast />);

  it('Render component: should have DailyItem' , () => {
    const dailyItemsAmount = 5;

    expect(wrapper.find(DailyItem)).toHaveLength(dailyItemsAmount);
  });

  it('DailyItem props' , () => {
    const mockedProps = {
      date: 'Wed, Feb 9',
      day: {
        date: '2022-02-09',
        id: 1,
        maxTemp: 3,
        maxWindSpeed: 8,
        minTemp: 0,
        precipAccum: 0.88,
        symbol: 'd100',
        symbolPhrase: 'Mostly clear',
        windDir: 298,
      },
      weatherSymbol: 'https://developer.foreca.com/static/images/symbols/d100.png',
    };

    expect(wrapper.find(DailyItem).first().props()).toMatchObject(mockedProps);
  });
});
