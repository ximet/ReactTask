import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import Button from '../../UI/button/Button';
import styles from './modalStyles.scss';

const modalRootElement = document.getElementById('modal');
function ModalCountries(props) {
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
      <div className={styles.modalBackground} onClick={() => onModalClose()}>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
          <div className={styles.buttons}>
            {content.length
              ? content.map(item => (
                  <Link
                    onClick={() => localStorage.setItem('currentCity', JSON.stringify(item))}
                    to={`/cities/${item.name}`}
                    key={item.id}
                  >
                    <Button text={item.name} />
                  </Link>
                ))
              : 'There are no cities'}
          </div>
        </div>
      </div>,
      element
    );
  } else {
    return null;
  }
}

export default ModalCountries;
