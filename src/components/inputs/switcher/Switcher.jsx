import * as React from 'react';
import { uniqueId } from 'lodash-es';
import Typography from '../../typography';
import { StyledButton, StyledWrapper } from './components';

const Switcher = ({
  label,
  onChange,
  checked: externalChecked,
  defaultChecked,
  disabled,
}) => {
  const buttonIdRef = React.useRef(uniqueId('switcher'));
  const [checked, setChecked] = React.useState(defaultChecked);

  return (
    <StyledWrapper>
      <StyledButton
        type="button"
        role="switch"
        disabled={disabled}
        aria-checked={Boolean(externalChecked || checked)}
        id={buttonIdRef.current}
        onClick={() => {
          if (externalChecked === undefined) setChecked(!checked);
          onChange({ value: !(externalChecked || checked) });
        }}
      />
      <Typography as="label" variant="label" htmlFor={buttonIdRef.current}>
        {label}
      </Typography>
    </StyledWrapper>
  );
};

export default Switcher;
