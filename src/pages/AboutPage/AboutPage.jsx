import React from 'react';
import PageLayout from '../../PageLayout/PageLayout';
import { Container, Title, Item } from './AboutPage.Styles';

function AboutPage() {
  return (
    <PageLayout>
      <Container>
        <Title>About us</Title>
        <ul>
          <Item>Search cities by their names</Item>
          <Item>
            Info about current condition(Location, Latitude, Longtitude, Altitude, Temperature,
            Wind, Time zone) for chosen city
          </Item>
        </ul>
      </Container>
    </PageLayout>
  );
}

export default AboutPage;
