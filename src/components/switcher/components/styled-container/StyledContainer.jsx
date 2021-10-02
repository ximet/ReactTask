import styled from 'styled-components';

const StyledContainer = styled('div')`
  display: flex;
  gap: ${(props) => props.theme.spacing(2)};
`;

export default StyledContainer;
