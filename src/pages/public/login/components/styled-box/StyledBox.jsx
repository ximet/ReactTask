import styled from 'styled-components';
import * as Components from 'components';

const StyledBox = styled(Components.Box)`
  margin-top: ${(props) => props.theme.spacing(40)};
`;

export default StyledBox;
