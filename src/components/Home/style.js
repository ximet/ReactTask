import styled from 'styled-components';
import Home from './Home';

const StyledHome = styled(Home)`
  ${({ theme }) => `
  padding: ${theme.padding.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;

  &__filters {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    border-bottom: $border-bottom-default;
    position: relative;

    &__error {
      position: absolute;
      font-size: $font-size-small;
      text-align: left;
      color: $error-color;
      bottom: 25px;
      left: 10px;
    }
  }
  `}
`;

export default StyledHome;
