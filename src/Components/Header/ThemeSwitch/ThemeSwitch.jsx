import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../../redux/theme';

import styles from './ThemeSwitch.module.scss';

function ThemeSwitch() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className={styles['theme-switch']}>
      <div className={styles.wrapper}>
        <label className={styles.switch}>
          <input
            type="checkbox"
            defaultChecked={theme === 'light'}
            id="checkbox-toggle"
            onClick={() => dispatch(toggleTheme())}
          />
          <span className={styles.slider}>
            <div className={styles.fish}>
              <div className={styles.body}></div>
              <div className={styles.eye}></div>
              <div className={styles.tail}></div>
            </div>
          </span>
          <span className={styles.wave}> </span>
          <div className={styles.sky}>
            <div className={styles.sun}>
              <div className={styles.outer}></div>
              <div className={styles.inner}></div>
            </div>
            <div className={`${styles.cloud} ${styles.cloud1}`}>
              <div className={styles.rect}></div>
              <div className={`${styles.circle} ${styles['circle-lg']}`}></div>
              <div className={`${styles.circle} ${styles['circle-sm']}`}></div>
            </div>
            <div className={`${styles.cloud} ${styles.cloud2}`}>
              <div className={styles.rect}></div>
              <div className={`${styles.circle} ${styles['circle-lg']}`}></div>
              <div className={`${styles.circle} ${styles['circle-sm']}`}></div>
            </div>
          </div>
        </label>
      </div>

      <svg viewBox="0 0 180 100" width="100%">
        <filter width="100%" height="100%" x="0%" y="0%" id="wave">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.000001"
            id="turbulence"
            numOctaves="1"
            result="turbulence"
          >
            <animate
              id="noiseAnimate"
              attributeName="baseFrequency"
              values="0.095,0.000001;0.025,0.2;"
              dur="1.4s"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="warpOffset"
            scale="6"
            dy="100px"
            xChannelSelector="R"
            yChannelSelector="G"
          ></feDisplacementMap>
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </svg>
    </div>
  );
}

export default ThemeSwitch;
