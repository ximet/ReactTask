import React, { FunctionComponent, useState } from 'react';

// Components
import ButtonSwitch from 'components/ButtonSwitch/ButtonSwitch';

// Styles
import { Flex } from 'styles/global';
import * as S from '../Dashboard.styles';

const DashboardForecast: FunctionComponent = () => {
  const [infoType, setInfoType] = useState<string>('forecast');

  const handleInfoType = (): void =>
    setInfoType(prevState => (prevState === 'forecast' ? 'air-quality' : 'forecast'));

  return (
    <S.DashboardForecast>
      <S.DashboardToolbar>
        <Flex justifySpaceBetween>
          <div>Nowcast Hourly Three-hourly Daily</div>
          <ButtonSwitch
            width="14.5rem"
            switchType="info"
            infoType={infoType}
            onClick={handleInfoType}
          >
            <span>Forecast</span>
            <span>Air quality</span>
          </ButtonSwitch>
        </Flex>
      </S.DashboardToolbar>
    </S.DashboardForecast>
  );
};

export default DashboardForecast;
