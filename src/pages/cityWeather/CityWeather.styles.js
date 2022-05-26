import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkElement = styled(Link)`
  color: var(--warning-color);
  text-decoration: none;
  background-color: var(--grey-color);
  padding: var(--x2) var(--x3);
  font-weight: bold;
  border-radius: var(--x2);
`;

export const LinkWrapper = styled.section`
  margin: var(--x3) auto;
`;

export const ErrorWrapper = styled.p`
  color: var(--warning-color);
  margin: 0.5rem 0 0 0.5rem;
`;

export const PlaceDescription = styled.h2`
  margin: 2.5rem auto 0.5rem auto;
  @media screen and (max-width: 500px) {
    font-size: var(--f4);
  }
`;

export const Title = styled.h1`
  @media screen and (max-width: 500px) {
    font-size: var(--f2);
  }
`;

export const CityContainer = styled.span`
  margin-right: var(--x1);
  background: var(--grey-color);
  border-radius: var(--x2);
  padding: var(--x2) var(--x3);
  cursor: pointer;
  @media screen and (max-width: 500px) {
    padding: var(--x1) var(--x2);
    font-size: var(--f1);
  }
`;

export const DeleteWrapper = styled.span`
  color: var(--destructive-color);
  font-size: var(--x3);
  font-weight: bold;
  margin-left: var(--x2);

  @media screen and (max-width: 500px) {
    font-size: var(--f1);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--x2);
  @media screen and (max-width: 500px) {
    gap: var(--x1);
  }
`;

export const Wrapper = styled.div`
  margin: var(--x2) auto var(--x3) auto;
  @media screen and (max-width: 500px) {
    margin-top: var(--x3);
  }
`;
