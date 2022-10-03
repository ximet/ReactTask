import styled from 'styled-components';

import { HEADER_HEIGHT } from 'styles/constants';
import { sectionRoot } from 'styles/mixins';

export const FeedbackHeroSection = styled.section`
  ${sectionRoot}
  height: calc(100vh - ${HEADER_HEIGHT}rem);

  svg {
    align-self: center;
    width: 85%;
    margin-top: 5vh;
    transform: rotate(-20deg);

    path {
      stroke: none;
    }
  }

  button:first-of-type {
    margin-right: 2rem;
  }
`;

export const FeedbackHeroContent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5vh;
  z-index: 1;

  p {
    margin-bottom: 3rem;
  }
`;

export const FeedbackFormSection = styled.section`
  ${sectionRoot}
  padding: 4rem 6rem;

  h2 {
    margin-bottom: 3rem;
  }

  form {
    width: 100%;
  }
`;

export const FeedbackFormLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const FeedbackFormGroup = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;
