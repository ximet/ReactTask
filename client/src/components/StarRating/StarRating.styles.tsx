import styled from 'styled-components';

import { StylesProps } from 'types';

import { radioWrapperRoot, starWrapperRoot } from 'styles/mixins';

export const StarRating = styled.div`
  div:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

interface StarWrapperStylesProps extends StylesProps {
  active: boolean;
}

export const StarWrapper = styled.div<StarWrapperStylesProps>`
  ${radioWrapperRoot}
  ${({ themeType, active }) => starWrapperRoot({ themeType, active })}

  input {
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
`;

export const Star = styled.input``;
