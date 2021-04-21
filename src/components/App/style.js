import styled from 'styled-components';
import App from './App';

const StyledApp = styled(App)`
  ${({ theme }) => `
    text-align: center;
    background-color: ${theme.colors.primaryColor};
    height: ${theme.height.default};
    width: ${theme.width.default};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    font-size: ${theme.fontSize.default};
    color: ${theme.colors.fontColor};

    &__footer {
      position: sticky;
      bottom: 0;

      padding: ${theme.padding.default} 0;
      width: inherit;
      background-color: ${theme.colors.primaryColor};
    }
  `}
`;

export default StyledApp;
