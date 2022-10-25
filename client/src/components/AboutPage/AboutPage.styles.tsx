import styled from 'styled-components';

import { StylesProps } from 'types';

import { breakpoints } from 'styles/breakpoints';
import { HEADER_HEIGHT } from 'styles/constants';
import { Flex } from 'styles/global';
import { sectionRoot, imageRoot, buttonPrimary, colorChange } from 'styles/mixins';
import theme from 'styles/theme';

export const AboutHeroSection = styled.section<StylesProps>`
  ${sectionRoot}
  height: calc(100vh - ${HEADER_HEIGHT}rem);

  svg {
    path {
      ${({ themeType }) =>
        colorChange({
          themeType,
          changeProp: 'fill',
          changeVal1: theme.palette.primary.light,
          changeVal2: theme.palette.primary.medium,
          transitionVal: 'fill'
        })}
    }
  }

  ${Flex}:first-child {
    @media (orientation: portrait) {
      flex-direction: column;
    }
  }

  @media ${breakpoints.iPadLandscape}, ${breakpoints.largeLandscape} {
    padding-top: 10vh;
  }

  @media (orientation: portrait) and (max-height: 46.1875em) {
    height: 100vh;
  }

  @media (orientation: portrait) and (max-width: 22.5em) and (max-height: 40em) {
    height: 105vh;
  }

  @media (orientation: landscape) and (max-height: 41em) {
    height: max-content;
    padding-bottom: 8rem;
  }
`;

export const AboutHeroContent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5vh;
  z-index: 1;

  p {
    margin-bottom: 3rem;
  }

  button:first-of-type {
    margin-right: 2rem;
  }
`;

export const AboutHeroImage = styled.picture`
  position: relative;
  width: 100%;
  height: 100%;
  align-self: center;

  img {
    ${imageRoot}
    position: absolute;
    width: 85%;
    transform: rotate(-25deg);
  }

  img:first-of-type {
    left: -5%;

    @media (orientation: portrait) {
      left: -10%;
    }
  }

  img:last-of-type {
    left: 25%;
  }

  @media (orientation: portrait) {
    margin-top: 12vh;
  }
`;

export const AboutHowSection = styled.section<StylesProps>`
  ${sectionRoot}
  padding: 4rem 10vw;
  ${({ themeType }) =>
    colorChange({
      themeType,
      changeProp: 'background',
      changeVal1: theme.palette.primary.light,
      changeVal2: theme.palette.primary.medium,
      transitionVal: 'background'
    })}
  color: ${theme.palette.black};

  h2 {
    margin-bottom: 3rem;
  }

  article:nth-of-type(even) {
    align-self: flex-end;
  }

  article:nth-of-type(odd) {
    align-self: flex-start;
  }

  article:not(:last-of-type) {
    margin-bottom: 4rem;
  }

  @media ${breakpoints.xxxl} {
    padding: 4rem 10%;
  }

  @media ${breakpoints.lgalt} {
    padding: 4rem 5vw;
  }

  @media ${breakpoints.lg} {
    padding: 4rem 1vw;
  }
`;

export const AboutArticle = styled.article`
  width: 60vw;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
  }

  @media ${breakpoints.xxxl} {
    width: 60%;
  }

  @media ${breakpoints.lgalt} {
    width: 70vw;
  }

  @media ${breakpoints.lg} {
    width: 80vw;
  }

  @media ${breakpoints.md} {
    width: unset;
  }

  ${Flex}:first-child {
    @media ${breakpoints.smalt} {
      flex-direction: column;
    }
  }
`;

export const AboutArticleContent = styled.div`
  margin-right: 2rem;

  @media ${breakpoints.smalt} {
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

export const AboutArticlePicture = styled.picture`
  img {
    ${imageRoot}
    width: 100%;
  }

  &:nth-last-of-type(1) {
    @media ${breakpoints.smalt} {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50%;
      }
    }

    @media ${breakpoints.xs} {
      img {
        width: 70%;
      }
    }

    @media ${breakpoints.xxs} {
      img {
        width: 80%;
      }
    }
  }
`;

export const AboutFeedbackSection = styled.section<StylesProps>`
  ${sectionRoot}
  height: 80vh;
  padding: 4rem 0;
  color: ${theme.palette.black};

  h2 {
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 2rem;
  }

  svg {
    height: 100%;

    path {
      ${({ themeType }) =>
        colorChange({
          themeType,
          changeProp: 'fill',
          changeVal1: theme.palette.primary.light,
          changeVal2: theme.palette.primary.medium,
          transitionVal: 'fill'
        })}
    }
  }

  @media (orientation: landscape) {
    height: 80vh;
  }

  @media (orientation: portrait) {
    height: 60vh;
  }

  @media ${breakpoints.sm} {
    button {
      ${buttonPrimary}
    }
  }

  @media (orientation: portrait) and (min-height: 46em) and (max-height: 60em) {
    button {
      margin-top: 5vh;
    }
  }

  @media only screen and (max-width: 22.25em) {
    p {
      text-align: center;
    }
  }

  @media (orientation: landscape) and (max-height: 33.75em) {
    button {
      ${buttonPrimary}
      margin-top: 10vh;
    }
  }

  @media (orientation: landscape) and (max-height: 25em) {
    button {
      margin-top: 5vh;
    }
  }
`;
