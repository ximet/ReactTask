import { breakpoints } from './breakpoints';
import theme from './theme';

interface colorChangeProps {
  themeType?: string;
  changeProp: string;
  changeVal1: string;
  changeVal2: string;
  transitionVal: string;
}

export const colorChange = ({
  themeType,
  changeProp,
  changeVal1,
  changeVal2,
  transitionVal
}: colorChangeProps) => `
  ${changeProp}: ${themeType === 'light' ? changeVal1 : changeVal2};
  transition: ${transitionVal} 1.2s;
  will-change: ${transitionVal};
`;

interface colorChangeOnHoverProps {
  changeProp: string;
  transitionVal: string;
}

export const colorChangeOnHover = ({ changeProp, transitionVal }: colorChangeOnHoverProps) => `
  ${changeProp}: ${theme.palette.primary.dark};
  transition: ${transitionVal} 0.15s;
`;

export const imageRoot = `
  border-radius: ${theme.shape.borderRadius};
  box-shadow: ${theme.shadows[1]};
`;

export const sectionRoot = `
  position: relative;
  width: 100vw;
  padding-bottom: 4rem;

  @media ${breakpoints.xxxl} {
    width: 100%;
  }
`;

export const radioWrapperRoot = `
  position: relative;
  cursor: pointer;

  label {
    cursor: pointer;
  }

  input {
    opacity: 0;
  }

  input:focus + svg,
  input:focus + label {
    outline: auto;
  }
`;

export const spinnerRoot = `
  border-radius: 50%;
  width: 10em;
  height: 10em;
`;

export const blobContainer = `
  position: absolute;

  svg {
    width: 100%;
    fill: ${theme.palette.primary.light};
    stroke: none;
  }
`;

export const buttonPrimary = `
  background: ${theme.palette.primary.light};

  &:hover {
    background: ${theme.palette.primary.medium};
  }

  &:active {
    background: ${theme.palette.primary.dark};
  }
`;
