import styled from 'styled-components';

export const Dropdown = styled.ul`
  margin: 2.5rem auto;
  padding-left: var(--f11);
  padding: 0 2rem;
  animation: fadein 2s;
  &:hover {
    cursor: default;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 500px) {
    padding-left: var(--f4);
  }
`;

export const ElementStyle = styled.li`
  margin: 0.5rem 0;
  font-size: var(--f4);
  list-style-position: inside;
  text-align: justify;
  @media only screen and (max-width: 500px) {
    font-size: var(--f3);
  }
  & a {
    color: var(--warning-color);
    text-decoration: none;
  }
`;
