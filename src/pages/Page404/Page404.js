import styles from './Page404.module.css';
import { PAGE404_TITLE } from '../../components/constants';

const Page404 = () => {
  return (
    <div className={styles.pageNotFound}>
      <h1>{PAGE404_TITLE}</h1>
      <img
        className={styles.img}
        src={require('../../../public/images/page404_.png')}
        alt="Logo image"
      />
    </div>
  );
};

export default Page404;
