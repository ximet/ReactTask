import styled from 'styled-components';

const StyledWrapper = styled('div')`
  display: flex;
  gap: ${(props) => props.theme.spacing(2)};
`;

export default StyledWrapper;
