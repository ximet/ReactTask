import React, { useEffect, useState } from 'react';
import * as Individual_S from '../../style';
import moment from 'moment';
import * as S from '../../../../app_data/styles_info/common_styles';

export function DateTime() {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment());

      return () => {
        clearInterval(timer);
      };
    }, 1000);
  }, []);

  return (
    <S.GridItem item xs={12} sm={6} m={5} margin="0" padding="0" minHeight="120px">
      <Individual_S.DateContainer className="date-time">
        <span className="time">{time.format('h:mm')}</span>
        <span className="date">{time.format('dddd, Do')}</span>
        <span className="year-month">{time.format('MMM YYYY')}</span>
      </Individual_S.DateContainer>
    </S.GridItem>
  );
}
