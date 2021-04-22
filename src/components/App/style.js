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
  `}
`;

export default StyledApp;
