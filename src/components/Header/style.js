import styled from 'styled-components';

import Header from './Header';

const styledHeader = styled(Header)`
  ${({ theme }) => `
  ${console.log(theme)}
        flex: 1;
        padding: ${theme.padding.default} 0;
        width: inherit;
        max-height: ${theme.height.s};
    
        display: flex;
        justify-content: space-evenly;
        }`}
`;
export default styledHeader;
