import styles from './Popup.css';

const Popup = props => {
  return (
    <>
      <div className={styles.popupWrap}>
        <div className={styles.popup}>
          <div
            className={styles.close}
            onClick={() => {
              props.close();
            }}
          >
            +
          </div>
          <div className={styles.message} dangerouslySetInnerHTML={{ __html: props.message }} />
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Popup;
