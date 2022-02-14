import classes from './currentForecastButton.scss';
import PropTypes from 'prop-types';

function CurrentForecastButton(props) {
  const { onClick, isActive } = props;

  return (
    <div
      className={isActive ? `${classes.button} ${classes.active}` : classes.button}
      onClick={onClick}
    >
      <p>Now</p>
    </div>
  );
}

CurrentForecastButton.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool
};

export default CurrentForecastButton;
