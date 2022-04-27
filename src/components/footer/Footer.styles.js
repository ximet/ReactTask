import styled from 'styled-components';

export const FooterStyles = styled.footer`
  background-color: var(--grey-color);
  height: var(--f11);
  width: 100%;
  line-height: var(--f11);
  text-align: center;
  position: fixed;
  bottom: 0;
  @media screen and (max-width: 500px) {
    height: var(--f7);
    width: 100%;
    line-height: var(--f7);
    font-size: 0.6rem;
  }
`;
