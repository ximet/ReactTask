import { useSelector, useDispatch } from 'react-redux';
import * as Style from './ToggleSwitch.styles';
import { TOGGLE_DARKMODE } from '../../store/actionType';

const ToggleSwitch = () => {
  const darkThemeEnabled = useSelector(state => state.darkModeToggle.darkThemeEnabled);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch({ type: TOGGLE_DARKMODE });
  };

  return (
    <Style.Label>
      <span>Mode is {darkThemeEnabled ? 'Dark' : 'Light'}</span>
      <Style.Input checked={darkThemeEnabled} type="checkbox" onChange={handleChange} />
      <Style.Switch />
    </Style.Label>
  );
};

export default ToggleSwitch;
