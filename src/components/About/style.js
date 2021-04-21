import styled from 'styled-components';
import About from './About';

const StyledAbout = styled(About)`
  ${({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: ${theme.margin.default};
  `}
`;

export default StyledAbout;
