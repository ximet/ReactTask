import styled from 'styled-components';

import theme from 'styles/theme';

import { HEADER_HEIGHT } from 'styles/constants';
import { sectionRoot, imageRoot } from 'styles/mixins';

export const AboutHeroSection = styled.section`
  ${sectionRoot}
  height: calc(100vh - ${HEADER_HEIGHT}rem);
`;

export const AboutHeroContent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5vh;

  p {
    margin-bottom: 3rem;
  }

  button:first-of-type {
    margin-right: 2rem;
  }
`;

export const AboutHeadline = styled.h1`
  span {
    display: block;
    margin-bottom: 1rem;
    font-size: 4.25rem;
    line-height: 1;
    color: ${theme.palette.primary.dark};
  }
`;

export const AboutHeroImage = styled.picture`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    ${imageRoot}
    position: absolute;
    width: 85%;
    transform: rotate(-25deg);
  }

  img:first-of-type {
    left: -5%;
  }

  img:last-of-type {
    left: 25%;
  }
`;

export const AboutHowSection = styled.section`
  ${sectionRoot}
  padding: 4rem 6rem;
  background: ${theme.palette.primary.light};
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
`;

export const AboutArticle = styled.article`
  width: 60%;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
  }
`;

export const AboutArticleContent = styled.div`
  width: 60%;
  margin-right: 2rem;
`;

export const AboutArticlePicture = styled.picture`
  img {
    ${imageRoot}
    width: 100%;
  }
`;

export const AboutFeedbackSection = styled.section`
  ${sectionRoot}
  height: 100vh;
  padding: 4rem 0;
  color: ${theme.palette.black};

  h2 {
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;
