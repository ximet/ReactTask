import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import themeStorage from '../../Services/ThemeStorage';

import { themeActions } from '../../Store/reducers/ThemeSlice/index';

const ThemeWrapper = props => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.theme);

  useEffect(() => {
    const getTheme = themeStorage().getTheme();
    dispatch(themeActions.setTheme(getTheme));
  }, []);

  return <div data-theme={theme === 'light' ? 'light' : 'dark'}>{props.children}</div>;
};

export default ThemeWrapper;
