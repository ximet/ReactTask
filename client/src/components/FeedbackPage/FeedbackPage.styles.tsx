import styled from 'styled-components';

import { StylesProps } from 'types';

import theme from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';
import { HEADER_HEIGHT } from 'styles/constants';
import { Flex } from 'styles/global';
import { blobContainer, sectionRoot } from 'styles/mixins';

export const FeedbackHeroSection = styled.section`
  ${sectionRoot}

  svg {
    align-self: center;
    width: 85%;
    margin-top: 5vh;
    transform: rotate(-20deg);

    path {
      stroke: none;
    }

    @media (orientation: portrait) {
      margin-left: 12vw;
    }
  }

  button:first-of-type {
    margin-right: 2rem;
  }

  ${Flex}:first-child {
    @media (orientation: portrait) {
      flex-direction: column;
    }
  }

  @media ${breakpoints.iPadLandscape}, ${breakpoints.largeLandscape} {
    padding-top: 10vh;
  }

  @media (orientation: landscape) and (min-height: 37.5em) {
    height: calc(100vh - ${HEADER_HEIGHT}rem);
    margin-bottom: 0;
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
  overflow: visible;
  max-width: 60rem;
  margin: 0 auto;
  padding: 4rem 0;

  h2 {
    margin-bottom: 3rem;
  }

  form {
    width: 100%;

    button {
      align-self: flex-end;
      margin-top: 1rem;
    }
  }
`;

export const FeedbackFormLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const FeedbackFormGroup = styled.div`
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

export const FeedbackFormBlobOne = styled.div`
  ${blobContainer}
  top: -35vh;
  right: -15vw;

  @media (orientation: landscape) {
    width: 45vw;
    max-width: 60rem;
  }

  @media ${breakpoints.lg} {
    width: 60vw;
  }

  @media (orientation: portrait) {
    width: 50vh;
  }
`;

export const FeedbackFormBlobTwo = styled.div`
  ${blobContainer}
  height: max-content;

  @media (orientation: landscape) {
    bottom: -20%;
    left: -20vw;
    width: 45vw;
    max-width: 60rem;
  }

  @media ${breakpoints.lg} {
    bottom: -15%;
    width: 60vw;
  }

  @media (orientation: portrait) {
    top: 60%;
    left: -20vw;
    width: 50vh;
  }

  @media ${breakpoints.sm} {
    left: -30vw;
  }
`;

export const FeedbackTestimonialsSection = styled.section`
  ${sectionRoot}
  overflow: visible;
  max-width: 60rem;
  margin: 0 auto;
  padding: 4rem 0;

  h2 {
    margin-bottom: 3rem;
  }
`;

export const FeedbackTestimonial = styled.div<StylesProps>`
  width: 100%;
  padding-left: 1rem;
  border-left: ${({ themeType }) =>
    `3px solid ${
      themeType === 'light' ? theme.palette.grey.light : theme.palette.componentBackgroundDark
    }`};

  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
`;

export const FeedbackTestimonialTop = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;

  > div:first-of-type {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.4;

    @media ${breakpoints.sm} {
      font-size: 1rem;
    }
  }
`;

export const FeedbackTestimonialBottom = styled.div<StylesProps>`
  p,
  time {
    font-size: 0.875rem;
    color: ${({ themeType }) =>
      themeType === 'light' ? theme.palette.grey.medium : theme.palette.grey.darkest};
  }
`;

export const FeedbackTestimonialsEmpty = styled.p`
  text-align: center;
`;
