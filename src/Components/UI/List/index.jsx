import React from 'react';
import PropTypes from 'prop-types';
import styles from './List';

const List = (props) => {
  return (
    <ul
      className={[
        styles.list,
        props.className,
      ].join(' ')}
    >
      {props.items.map(item =>
        <li key={item.id}
            className={[
              styles.listItem,
              props.liClassName,
            ].join(' ')}
        >
          {item.content}
        </li>
      )}
    </ul>
  );
};

List.propTypes = {
  className: PropTypes.string,
  liClassName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.func,
      PropTypes.object,
      PropTypes.element,
    ]).isRequired,
  })).isRequired,
};

List.defaultProps = {
  className: '',
  liClassName: '',
};

export default List;
