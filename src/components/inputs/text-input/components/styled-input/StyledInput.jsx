import styled from 'styled-components';

const StyledInput = styled('input')`
  outline-color: ${(props) => props.theme.palette.primary.dark};
  border-radius: ${(props) => props.theme.shape.borderRadius};
  border: 2px solid ${(props) => props.theme.palette.primary.main};
  padding: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.palette.gray[50]};

  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    border-color: ${(props) => props.theme.palette.gray[400]};
    background-color: ${(props) => props.theme.palette.gray[200]};
  }
`;

export default StyledInput;
