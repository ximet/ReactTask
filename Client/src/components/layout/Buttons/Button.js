import React from 'react';

function Button(props) {
  return (
    <button type={props.type} className={'button'} onClick={props.onClick}>
      {props.name}
    </button>
  );
}

export default Button;
