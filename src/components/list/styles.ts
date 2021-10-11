import styled, { StyledProps } from 'styled-components';
import { DirectionVariant } from 'types/enums';

type UnorderedListProps = StyledProps<{
  direction?: DirectionVariant;
}>;

export const UnorderedList = styled('ul')<UnorderedListProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.theme.spacing(4)};
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
