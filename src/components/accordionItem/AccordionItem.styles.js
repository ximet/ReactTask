import styled from 'styled-components';

export const Wrap = styled.section`
  width: 100%;
  height: auto;
  box-shadow: 0.1rem 0.1rem 0.4rem 0.1rem var(--container-background);
  margin: 1rem auto;
  position: relative;
  display: flex;
  h2 {
    margin: auto 0;
    font-weight: bold;
    @media only screen and (max-width: 500px) {
      font-size: 1rem;
      padding: 1rem 1rem 1rem 0;
    }
  }
`;

export const BorderLine = styled.div`
  border-bottom: 0.2rem solid var(--black-color);
  position: absolute;
  bottom: 0;
  transition: width 1s;
  width: ${props => (props.active ? '25rem' : '12.5rem')};
  @media only screen and (max-width: 500px) {
    width: ${props => (props.active ? '10rem' : '5rem')};
  }
`;

export const Element = styled.span`
  color: var(--black-color);
  background: linear-gradient(var(--grey-color), var(--black-color));
  margin: var(--f3) var(--f5);
  padding: var(--f3) var(--f5);
  font-size: var(--f7);
  @media only screen and (max-width: 500px) {
    height: fit-content;
  }
`;
