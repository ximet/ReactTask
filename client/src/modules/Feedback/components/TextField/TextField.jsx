import React from 'react';
import * as S from '../../style';

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
      multiline={Boolean(props.multiline)}
      rows={props.rows}
      onChange={event => {
        props.onChangeHandler(event.target.value);
      }}
    />
  );
}
