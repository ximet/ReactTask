import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`

  body {
    color: ${({ theme }) => theme.bodyFontColor};
  }

  a {
    color : ${({ theme }) => theme.linkFontColor}
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  :root {
    -moz-tab-size: 4;
    tab-size: 4;
  }
  
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  body {
    margin: 0;
  }
  
  body {
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  }
  
  hr {
    height: 0; 
    color: inherit; 
  }
  
  abbr[title] {
    text-decoration: underline dotted;
  }
  
  b,
  strong {
    font-weight: bolder;
  }
  
  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace; /* 1 */
    font-size: 1em; 
  }
  
  small {
    font-size: 80%;
  }
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  table {
    text-indent: 0; 
    border-color: inherit; 
  }
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }
  
  button,
  select {
    text-transform: none;
  }
  
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  
  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  :-moz-ui-invalid {
    box-shadow: none;
  }
  
  legend {
    padding: 0;
  }
  
  progress {
    vertical-align: baseline;
  }
  
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }
  
  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  summary {
    display: list-item;
  }
  
  html,
  body,
  div {
    height: 100%;
  }
  `;
