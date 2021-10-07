import * as React from 'react';
import * as S from './styles';

export interface TypographyProps extends React.AllHTMLAttributes<HTMLElement> {
  variant: keyof typeof S;
  as?: keyof React.ReactHTML;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  ...rest
}): React.ReactElement => {
  return React.createElement(S[variant], rest);
};

export default Typography;
