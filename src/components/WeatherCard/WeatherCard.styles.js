import styled from 'styled-components';

export const Container = styled.div`
  margin-top: var(--f2);
  margin-bottom: var(--f13);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 0.5rem;
  align-items: stretch;
`;

export const CardContainer = styled.div`
  background-color: var(--grey-color);
  padding: 1rem 1rem 0 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const ImageWrapper = styled.div`
  text-align: center;
  & img {
    width: var(--f20);
    object-fit: cover;
  }
`;

export const DescriptionWrapper = styled.div`
  margin: 0 0 0.25rem 0;
  font-size: var(--f2);
  font-weight: bold;
`;
