import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button';

const Button = (props) => {
  const btnStyleClass = props.style === 'primary' ? styles.btnPrimary : styles.btnSecondary;
  const onClick = props.onClick;
  const iconLeft = props.iconLeft;
  const iconRight = props.iconRight;

  return (
    <button
      className={[
        styles.btn,
        btnStyleClass,
      ].join(' ')}
      type={props.type}
      onClick={props.onClick}
    >
      { iconLeft &&
        (
          <span
            className={[
              styles.btnIcon,
              styles.btnLeftIcon,
            ].join(' ')}
          >
            { iconLeft }
          </span>
        )
      }
      { props.label }
      { iconRight &&
        (
          <span
            className={[
              styles.btnIcon,
              styles.btnRightIcon,
            ].join(' ')}
          >
            { iconRight }
          </span>
        )
      }
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  // iconLeft: PropTypes.instanceOf(Icon),
  // iconRight: PropTypes.instanceOf(Icon),
};

Button.defaultProps = {
  style: 'primary',
  type: 'button',
  onClick: () => {
    return 'hello!';
  },
  iconLeft: null,
  iconRight: null,
};

export default Button;
