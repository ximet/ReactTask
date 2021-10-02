import { css } from 'styled-components';

const h1StyleSheet = css`
  font-size: ${(props) => props.theme.typography.fontSizes[0]};
`;

const h2StyleSheet = css`
  font-size: ${(props) => props.theme.typography.fontSizes[1]};
`;

const h3StyleSheet = css`
  font-size: ${(props) => props.theme.typography.fontSizes[2]};
`;

const h4StyleSheet = css`
  font-size: ${(props) => props.theme.typography.fontSizes[3]};
`;

const h5StyleSheet = css`
  font-size: ${(props) => props.theme.typography.fontSizes[4]};
`;

const paragraphStyleSheet = css`
  font-size: ${(props) => props.theme.typography.fontSizes[3]};
`;

const labelStyleSheet = css`
  display: inline;
`;

const styleSheets = {
  h1: h1StyleSheet,
  h2: h2StyleSheet,
  h3: h3StyleSheet,
  h4: h4StyleSheet,
  h5: h5StyleSheet,
  p: paragraphStyleSheet,
  label: labelStyleSheet,
};

export default styleSheets;
