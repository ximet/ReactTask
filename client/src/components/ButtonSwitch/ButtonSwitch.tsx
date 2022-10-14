import React, { FunctionComponent, MouseEvent, ButtonHTMLAttributes } from 'react';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';

// Styles
import * as S from './ButtonSwitch.styles';

interface ButtonSwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: string;
  switchType: string;
  infoType?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonSwitch: FunctionComponent<ButtonSwitchProps> = ({
  width,
  switchType,
  infoType,
  onClick,
  children,
  ...otherProps
}) => {
  const theme = useAppSelector(selectTheme);

  return (
    <S.ButtonSwitch
      type="button"
      role="switch"
      themeType={theme}
      width={width}
      switchType={switchType}
      infoType={infoType}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </S.ButtonSwitch>
  );
};

export default ButtonSwitch;
