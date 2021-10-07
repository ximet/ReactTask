import styled, { StyledProps } from 'styled-components';
import { ColorVariant } from 'types/enums';

export type ButtonProps = StyledProps<{
  color?: ColorVariant;
}>;

const Button = styled('button')<ButtonProps>`
  outline-color: ${(props) =>
    props.theme.palette[props.color || 'primary'].dark};
  border-radius: ${(props) => props.theme.shape.borderRadius};
  border: 2px solid
    ${(props) => props.theme.palette[props.color || 'primary'].main};
  padding: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.palette.gray[50]};
`;

export default Button;
