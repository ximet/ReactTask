import { useState } from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import styles from './Toggle.module.css';

const imageLight = {
  on: 'lightswitch-on',
  off: 'lightswitch-off'
};

const Toggle = () => {
  const [img, setImg] = useState(imageLight.on);

  const changeImage = () => {
    img === imageLight.off ? setImg(imageLight.on) : setImg(imageLight.off);
  };

  const { toggleDark } = useThemeContext();

  return (
    <img
      className={styles.toggleImg}
      src={require(`../../../public/images/${img}.png`)}
      alt="Logo image"
      onClick={() => {
        toggleDark();
        changeImage();
      }}
    />
  );
};

export default Toggle;
