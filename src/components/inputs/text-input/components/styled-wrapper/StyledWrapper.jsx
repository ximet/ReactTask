import styled from 'styled-components';

const StyledWrapper = styled('div')`
  margin: ${(props) => props.theme.spacing(2)} 0;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing()};
`;

export default StyledWrapper;
