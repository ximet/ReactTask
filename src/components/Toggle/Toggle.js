import { useState } from 'react';

import styles from './Toggle.module.css';

const Toggle = props => {
  const [img, setImg] = useState('lightswitch-on');

  const changeImage = () => {
    img === 'lightswitch-off' ? setImg('lightswitch-on') : setImg('lightswitch-off');
  };

  return (
    <div>
      <div className={styles.toggleContainer}>
        <img
          src={require(`../../../public/images/${img}.png`)}
          alt="Logo image"
          onClick={() => {
            props.toggleDark();
            changeImage();
          }}
        />
      </div>
    </div>
  );
};

export default Toggle;
