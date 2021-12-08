import React from 'react';
import styles from './Textarea.modules.css';
import PropTypes from 'prop-types';

function Textarea(props) {
  return (
    <textarea className={styles.textareaElement} {...props}>
      {props.children}
    </textarea>
  );
}

Textarea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Textarea;
