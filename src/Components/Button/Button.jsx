import { useSelector } from 'react-redux';

import styles from './Button.module.scss';

function Button({ children }) {
  const theme = useSelector((state) => state.theme);

  return <button className={styles[`${theme}-theme--btn`]}>{children}</button>;
}

export default Button;
