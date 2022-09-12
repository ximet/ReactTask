import React, { FunctionComponent, MouseEvent } from 'react';

// Store
import { useAppSelector } from '../../../app/hooks';

// Styles
import * as S from './styles';

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
  const { theme } = useAppSelector(state => state.theme);

  return (
    <S.ButtonSwitch
      theme={theme}
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
