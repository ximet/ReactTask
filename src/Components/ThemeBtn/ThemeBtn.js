import styles from './themeBtn.css';

import { useDispatch, useSelector } from 'react-redux';
import { themeActions } from '../../Store/reducers/ThemeSlice/index';

import themeStorage from '../../Services/ThemeStorage';

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.theme);

  const changeTheme = () => {
    let newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(themeActions.setTheme(newTheme));
    themeStorage().setTheme(newTheme);
  };

  return (
    <div
      className={theme === 'light' ? styles.themeBtn : styles.themeBtn + ' ' + styles.darkTheme}
      onClick={changeTheme}
    ></div>
  );
};

export default ThemeBtn;
