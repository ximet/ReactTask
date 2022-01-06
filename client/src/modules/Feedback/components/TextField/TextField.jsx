import React from 'react';
import * as S from '../../style';
import PropTypes from 'prop-types';

export default function TextField(props) {
  return (
    <S.TextField
      fullWidth
      color={'secondary'}
      error={Boolean(props.error)}
      id="standard-error-helper-text"
      label={props.defaultValue}
      value={props.value}
      helperText={props.error}
      variant="standard"
      name={props.name}
      multiline={Boolean(props.multiline)}
      rows={props.rows}
      onChange={event => {
        props.onChangeHandler(event.target.value);
      }}
      onBlur={event => {
        props.onBlurHandler(event.target);
      }}
    />
  );
}

TextField.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  rows: PropTypes.number,
  multiline: PropTypes.bool,
  error: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string
};
