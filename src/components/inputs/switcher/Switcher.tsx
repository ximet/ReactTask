import * as React from 'react';
import { uniqueId } from 'lodash-es';
import { Typography } from 'components';
import * as S from './styles';

export interface SwitcherProps {
  label: string;
  onChange: (event: { value: boolean }) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}

const Switcher: React.FC<SwitcherProps> = ({
  label,
  onChange,
  checked: externalChecked,
  defaultChecked,
  disabled,
}) => {
  const buttonIdRef = React.useRef(uniqueId('switcher'));
  const [checked, setChecked] = React.useState(defaultChecked);

  return (
    <S.Wrapper>
      <S.SwitcherButton
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
    </S.Wrapper>
  );
};

export default Switcher;
