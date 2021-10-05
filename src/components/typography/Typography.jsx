import styled from 'styled-components';
import styleSheets from './styles';

const StyledTypography = styled.div`
  margin: 0;
  font-size: ${(props) => props.theme.typography.fontSizes[3]};
  color: ${(props) => props.theme.palette.text.primary};
  ${(props) => styleSheets[props.variant]}
`;

const Typography = (props) => <StyledTypography {...props} />;

export default Typography;
