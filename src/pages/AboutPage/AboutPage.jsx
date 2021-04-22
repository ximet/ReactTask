import React from 'react';
import PageLayout from '../../PageLayout/PageLayout';
import { DivContainer, PTextTitile, LiText } from './AboutPage.Styles';

function AboutPage() {
  return (
    <PageLayout>
      <DivContainer>
        <PTextTitile>About us</PTextTitile>
        <ul>
          <LiText>Search cities by their names</LiText>
          <LiText>
            Info about current condition(Location, Latitude, Longtitude, Altitude, Temperature,
            Wind, Time zone) for chosen city
          </LiText>
        </ul>
      </DivContainer>
    </PageLayout>
  );
}

export default AboutPage;
