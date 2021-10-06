import styled, { css } from 'styled-components';

export const h1 = styled('h1')`
  font-size: ${(props) => props.theme.typography.fontSizes[0]};
`;

export const h2 = styled('h2')`
  font-size: ${(props) => props.theme.typography.fontSizes[1]};
`;

export const h3 = styled('h3')`
  font-size: ${(props) => props.theme.typography.fontSizes[2]};
`;

export const h4 = styled('h4')`
  font-size: ${(props) => props.theme.typography.fontSizes[3]};
`;

export const h5 = styled('h5')`
  font-size: ${(props) => props.theme.typography.fontSizes[4]};
`;

export const p = styled('p')`
  font-size: ${(props) => props.theme.typography.fontSizes[3]};
`;

export const label = styled('label')`
  display: inline;
`;

// const styleSheets = {
//   h1: h1StyleSheet,
//   h2: h2StyleSheet,
//   h3: h3StyleSheet,
//   h4: h4StyleSheet,
//   h5: h5StyleSheet,
//   p: paragraphStyleSheet,
//   label: labelStyleSheet,
// };

// export const Typography = styled('div')`
//   margin: 0;
//   font-size: ${(props) => props.theme.typography.fontSizes[3]};
//   color: ${(props) => props.theme.palette.text.primary};
//   ${(props) => styleSheets[props.variant]}
// `;
