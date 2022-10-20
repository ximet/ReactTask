import React, { FunctionComponent } from 'react';

// Types
import { AirQualityInfo } from 'types';

// Assets
import { IconAirQuality } from 'assets/images/svg';

// Styles
import { Flex } from 'styles/global';
import * as S from '../Widget.styles';

interface WidgetAirDetailsProps {
  color?: string;
  data?: AirQualityInfo | null;
  active: boolean;
}

const WidgetAirDetails: FunctionComponent<WidgetAirDetailsProps> = ({ color, data, active }) => (
  <>
    <S.WidgetDetails>
      <S.WidgetDetailsTop>
        {data?.AQI && (
          <S.WidgetDetailsItem color={color}>
            <span>{active ? 'Air Quality Index' : 'AQI'}</span> {data?.AQI}
          </S.WidgetDetailsItem>
        )}
      </S.WidgetDetailsTop>
      <S.WidgetDetailsBottom color={color} active={active}>
        {!!data?.AQI_CO && (
          <S.WidgetDetailsItem color={color}>
            <span>AQI_CO</span> {data?.AQI_CO}
          </S.WidgetDetailsItem>
        )}
        {!!data?.AQI_NO2 && (
          <S.WidgetDetailsItem color={color}>
            <span>AQI_NO2</span> {data?.AQI_NO2}
          </S.WidgetDetailsItem>
        )}
        {!!data?.AQI_O3 && (
          <S.WidgetDetailsItem color={color}>
            <span>AQI_O3</span> {data?.AQI_O3}
          </S.WidgetDetailsItem>
        )}
        {!!data?.AQI_SO2 && (
          <S.WidgetDetailsItem color={color}>
            <span>AQI_SO2</span> {data?.AQI_SO2}
          </S.WidgetDetailsItem>
        )}
      </S.WidgetDetailsBottom>
    </S.WidgetDetails>
    <S.WidgetDetails>
      <S.WidgetDetailsTop>
        <S.WidgetImg>
          <Flex directionColumn>
            <IconAirQuality />
            {data?.pollutantPhrase && <p>{data?.pollutantPhrase}</p>}
          </Flex>
        </S.WidgetImg>
      </S.WidgetDetailsTop>
      <S.WidgetDetailsBottom color={color} active={active}>
        {data?.AQI_PM2P5 && (
          <S.WidgetDetailsItem color={color}>
            <span>AQI_PM2P5</span> {data?.AQI_PM2P5}
          </S.WidgetDetailsItem>
        )}
        {data?.AQI_PM10 && (
          <S.WidgetDetailsItem color={color}>
            <span>AQI_PM10</span> {data?.AQI_PM10}
          </S.WidgetDetailsItem>
        )}
      </S.WidgetDetailsBottom>
    </S.WidgetDetails>
  </>
);
export default WidgetAirDetails;
