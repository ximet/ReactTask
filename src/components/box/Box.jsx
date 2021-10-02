import styled from 'styled-components';

const Box = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing(4)};
  background-color: ${(props) => props.theme.palette.background.light};
  border-radius: ${(props) => props.theme.shape.borderRadius};
  box-shadow: ${(props) => props.theme.shape.boxShadow};
`;

export default Box;
