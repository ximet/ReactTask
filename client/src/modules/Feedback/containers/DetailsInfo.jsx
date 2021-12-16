import React, { useState } from 'react';
import { DETAILS } from '../../../app_data/pages_info';
import Detail from '../components/Detail';
import * as S from '../style';

export default function DetailsInfo() {
  const [details] = useState(DETAILS);
  return (
    <S.GridItem sm={4} md={4} item marginLeft="auto">
      {details.map(detail => (
        <Detail key={detail.title} title={detail.title} text={detail.text} icon={detail.iconName} />
      ))}
    </S.GridItem>
  );
}
