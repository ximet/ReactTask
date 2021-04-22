import styled from 'styled-components';
import Home from './Home';

const StyledHome = styled(Home)`
  ${({ theme }) => `
    padding: ${theme.padding.xl};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
  `}
`;

export default StyledHome;
