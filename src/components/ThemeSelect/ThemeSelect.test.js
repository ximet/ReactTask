import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ThemeSelect from './ThemeSelect';
import classes from './ThemeSelect.module.scss';
import ThemeDropDown from './components/ThemeDropDown/ThemeDropDown';

configure({ adapter: new Adapter() });

describe('ThemeSelect component', () => {
  const renderComponent = () => mount(<ThemeSelect />);

  it('Component should contain html element with selectedTheme class', () => {
    const component = renderComponent();

    expect(component.find('.selectedTheme').exists()).toBe(true);
  });

  it("Component shouldn't contain ThemeDropDown component", () => {
    const component = renderComponent();

    expect(component.find(ThemeDropDown).exists()).toBe(false);
  });

  it('Component should contain ThemeDropDown component', () => {
    const component = renderComponent();
    component.find('.selectedTheme').simulate('click');

    expect(component.find(ThemeDropDown).exists()).toBe(true);
  });
});
