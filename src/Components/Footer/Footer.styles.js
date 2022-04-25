import styled from 'styled-components';

export const FooterStyles = styled.footer`
  background-color: #808080;
  height: 2rem;
  width: 100%;
  line-height: 2rem;
  text-align: center;
  position: fixed;
  margin: auto;
  bottom: 0;
  @media screen and (max-width: 500px) {
    height: 2rem;
    width: 100%;
    line-height: 2rem;
    font-size: 0.6rem;
  }
`;
