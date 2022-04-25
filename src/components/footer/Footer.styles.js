import styled from 'styled-components';

export const FooterStyles = styled.footer`
  background-color: rgb(241, 241, 241);
  height: 3rem;
  width: 100%;
  line-height: 3rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  @media screen and (max-width: 500px) {
    height: 2rem;
    width: 100%;
    line-height: 2rem;
    font-size: 0.6rem;
  }
`;
