import styles from './Popup.css';
import { useDispatch } from 'react-redux';
import { popupActions } from '../../Store/reducers/PopupSlice/index';

const Popup = props => {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(popupActions.setMessage(null));
  };
  return (
    <>
      <div className={styles.popupWrap}>
        <div className={styles.popup}>
          <div className={styles.close} onClick={closePopup}>
            +
          </div>
          <div className={styles.message}>{props.message}</div>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Popup;
