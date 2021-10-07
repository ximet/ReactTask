import styled, { StyledProps } from 'styled-components';
import { LayoutSize } from 'types/enums';

export type ContainerProps = StyledProps<{
  columnCount?: number;
  size?: LayoutSize;
}>;

const Container = styled('div')<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnCount || 1}, 1fr);
  grid-gap: ${(props) => props.theme.spacing(4)};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing(4)};
  max-width: ${(props) => props.theme.breakpoints.values[props.size || 'md']};
`;

export default Container;
