import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Style from './ToggleSwitch.styles';
import { TOGGLE_DARKMODE } from '../../store/actionType';

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleChange = e => {
    setChecked(e.target.checked);
    dispatch({ type: TOGGLE_DARKMODE });
  };

  return (
    <Style.Label>
      <span>Mode is {checked ? 'Dark' : 'Light'}</span>
      <Style.Input checked={checked} type="checkbox" onChange={handleChange} />
      <Style.Switch />
    </Style.Label>
  );
};

export default ToggleSwitch;
