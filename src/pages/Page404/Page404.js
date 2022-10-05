import styles from './Page404.module.css';

export const PAGE404_TITLE = '404 Page Not Found';

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
