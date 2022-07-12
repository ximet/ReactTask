import styles from './themeBtn.css';

import { useDispatch, useSelector } from 'react-redux';
import { themeActions } from '../../Store/reducers/ThemeSlice/index';

import themeStorage from '../../Services/ThemeStorage';

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const { darkTheme } = useSelector(state => state.theme);

  const changeTheme = () => {
    dispatch(themeActions.setTheme(!Boolean(darkTheme)));
    themeStorage().setTheme(!Boolean(darkTheme));
    console.log('ClickThemeBtn');
    console.log(darkTheme);
    console.log(Boolean(themeStorage().getTheme()));
  };

  console.log('ThemeBtn');
  console.log(darkTheme);
  return (
    <div
      className={darkTheme ? styles.themeBtn + ' ' + styles.darkTheme : styles.themeBtn}
      onClick={changeTheme}
    ></div>
  );
};

export default ThemeBtn;
