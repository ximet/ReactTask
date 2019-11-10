import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';
import Icon from '../../../assets/images/snowflake.svg';
import styles from './Detailed.scss';

const Detailed = ({ city }) => (
  <>
    <div className={styles.cityBlock}>
      <div className={styles.cityInfo}>
        <h1 className={styles.name}>
          {city.name}
        </h1>
        <h2 className={styles.time}>
          {city.time}
        </h2>
        <h2 className={styles.temperature}>
          {city.temperature}
          <span> &#8451;</span>
        </h2>
      </div>
      <div className={styles.icon}>
        <img src={city.icon} width="80" height="80" alt="Icon" />
      </div>
    </div>

    <Button
      name="More..."
      alignRight
      clickHandler={() => console.log('More...')} />
  </>
);

Detailed.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    time: PropTypes.string,
    temperature: PropTypes.string,
    icon: PropTypes.string,
  }),
};

Detailed.defaultProps = {
  city: {
    name: 'Minsk',
    time: '12:00',
    temperature: '+ 3',
    icon: Icon,
  },
};

export default Detailed;
