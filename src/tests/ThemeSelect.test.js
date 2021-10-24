import React from 'react';
import renderer from 'react-test-renderer';
import ThemeSelect from '../components/ThemeSelect/ThemeSelect';

test('Link changes the class when hovered', () => {
  const component = renderer.create(<ThemeSelect />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.toggleDropDown();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.toggleDropDown();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
