import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../UI/button/Button';
import styles from './modalStyles.scss';

const modalRootElement = document.getElementById('modal');
export default function ModalCountries(props) {
  const { content, onModalClose, modal } = props;
  const element = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    modalRootElement.appendChild(element);
    return () => {
      modalRootElement.removeChild(element);
    };
  });
  if (modal) {
    return createPortal(
      <div className={styles.modalBcg} onClick={() => onModalClose()}>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
          <div className={styles.buttons}>
            {content.map(item => (
              <Button text={item.name} key={item.id}></Button>
            ))}
          </div>
        </div>
      </div>,
      element
    );
  } else {
    return null;
  }
}
