import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import themeStorage from '../../Services/ThemeStorage';

import { themeActions } from '../../Store/reducers/ThemeSlice/index';

const ThemeWrapper = props => {
  const dispatch = useDispatch();
  const { darkTheme } = useSelector(state => state.theme);

  useEffect(() => {
    let getTheme = Boolean(themeStorage().getTheme());
    console.log('ThemeWrapper');
    dispatch(themeActions.setTheme(getTheme));
    console.log(getTheme);
  }, []);

  return <div data-theme={darkTheme ? 'dark' : ''}>{props.children}</div>;
};

export default ThemeWrapper;
