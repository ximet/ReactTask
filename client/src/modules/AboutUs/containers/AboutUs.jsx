import React, { useState } from 'react';
import * as S from '../../../app_data/styles_info/common_styles';
import { ABOUT_US } from '../../../app_data/pages_info';
import Slogan from '../components/Slogan';
import Paragraph from '../components/Paragraph';

export function AboutUs() {
  const [aboutUsInfo] = useState(ABOUT_US);
  return (
    <S.Box>
      <S.Container maxWidth={970}>
        <S.Title m={'0 22px'} variant="h4" align="left">
          About Us
        </S.Title>
        <S.GridContainer container spacing={2}>
          <Slogan slogan={aboutUsInfo.sloganDetails} />
          <Paragraph paragraphText={aboutUsInfo.paragraphText} />
        </S.GridContainer>
      </S.Container>
    </S.Box>
  );
}
