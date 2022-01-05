import { DateTime } from './DateTime';
import React from 'react';
import enableHooks, { withHooks } from 'jest-react-hooks-shallow';
import moment from 'moment';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
enableHooks(jest);

describe('Testing DateTime component', () => {
  const render = () => shallow(<DateTime />);
  it('DateTime component should be rendered', () => {
    const component = render();
    expect(component).toBeTruthy();
  });
  it('DateTime component view right time', () => {
    const time = moment().format('h:mm');
    const component = render();
    const text = component.find('.time').text();
    expect(text).toEqual(time);
  });

  it('DateTime component view right date', () => {
    const time = moment().format('dddd, Do');
    const component = render();
    const text = component.find('.date').text();
    expect(text).toEqual(time);
  });

  it('DateTime component view right year', () => {
    const time = moment().format('MMM YYYY');
    const component = render();
    const text = component.find('.year-month').text();
    expect(text).toEqual(time);
  });
});
