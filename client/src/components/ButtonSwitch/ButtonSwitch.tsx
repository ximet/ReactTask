import React, { FunctionComponent, MouseEvent } from 'react';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';

// Styles
import * as S from './ButtonSwitch.styles';

interface ButtonSwitchProps {
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
  children
}) => {
  const theme = useAppSelector(selectTheme);

  return (
    <S.ButtonSwitch
      themeType={theme}
      width={width}
      switchType={switchType}
      infoType={infoType}
      onClick={onClick}
    >
      {children}
    </S.ButtonSwitch>
  );
};

export default ButtonSwitch;