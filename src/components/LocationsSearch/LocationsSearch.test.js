import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LocationsSearch from './LocationsSearch';

Enzyme.configure({ adapter: new Adapter() });

describe('<LocationsSearch />', () => {
  it('should render a LocationsSearch with LocationsSearchReuslts', () => {
    const wrapper = shallow(
      <LocationsSearch
        isReadyForSearch={true}
        searchResults={[]}
        clearSearch={() => {}}
        searchLocations={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a LocationsSearch with Preloader', () => {
    const wrapper = shallow(
      <LocationsSearch
        isReadyForSearch={false}
        searchResults={[]}
        clearSearch={() => {}}
        searchLocations={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
