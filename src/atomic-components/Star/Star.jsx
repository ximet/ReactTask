/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import starBlack from '../../../public/images/starBlack.png';
import starYellow from '../../../public/images/starYellow.png';

function Star({ filled, onClick }) {
  return (
    <span>
      <img alt="starIcon" src={filled ? starYellow : starBlack} onClick={onClick} />
    </span>
  );
}

export default Star;
