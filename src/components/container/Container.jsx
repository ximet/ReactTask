import styled from 'styled-components';

const Container = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing(4)};
  max-width: ${(props) => props.theme.breakpoints.values[props.size || 'md']};
`;

export default Container;
