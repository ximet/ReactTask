import React, { FunctionComponent } from 'react';

// Types
import { WeatherInfo } from 'types';

// Utils
import { capitalize, getWeatherSymbol } from 'utils/helpers';

// Styles
import { Flex } from 'styles/global';
import * as S from '../Widget.styles';

interface WidgetWeatherDetailsProps {
  color?: string;
  data?: WeatherInfo | null;
  active: boolean;
}

const WidgetWeatherDetails: FunctionComponent<WidgetWeatherDetailsProps> = ({
  color,
  data,
  active
}) => (
  <>
    <S.WidgetDetails>
      <S.WidgetDetailsTop>
        {!!data?.temperature && <S.WidgetTemp>{data?.temperature}°</S.WidgetTemp>}
        {!!data?.maxTemp && (
          <S.WidgetTempMaxMin>
            <span>{data?.maxTemp}°</span> <span>{data?.minTemp}°</span>
          </S.WidgetTempMaxMin>
        )}
      </S.WidgetDetailsTop>
      <S.WidgetDetailsBottom color={color} active={active}>
        {!!data?.feelsLikeTemp && (
          <S.WidgetDetailsItem color={color}>
            <span>Real Feel</span> {data?.feelsLikeTemp}°
          </S.WidgetDetailsItem>
        )}
        {!!data?.windSpeed && (
          <S.WidgetDetailsItem color={color}>
            <span>Wind</span> {data?.windDirString}, speed {data?.windSpeed}&nbsp;m/s, gust{' '}
            {data?.windGust} m/s
          </S.WidgetDetailsItem>
        )}
        {!!data?.maxWindSpeed && (
          <S.WidgetDetailsItem color={color}>
            <span>Wind</span> {data?.maxWindSpeed}&nbsp;m/s max,
          </S.WidgetDetailsItem>
        )}
        {!!data?.pressure && (
          <S.WidgetDetailsItem color={color}>
            <span>Pressure</span> {data?.pressure}
          </S.WidgetDetailsItem>
        )}
        {!!data?.relHumidity && (
          <S.WidgetDetailsItem color={color}>
            <span>Humidity</span> {data?.relHumidity}%
          </S.WidgetDetailsItem>
        )}
      </S.WidgetDetailsBottom>
    </S.WidgetDetails>
    <S.WidgetDetails>
      <S.WidgetDetailsTop>
        <S.WidgetImg>
          <Flex directionColumn>
            <img src={getWeatherSymbol(data?.symbol)} alt={data?.symbolPhrase} />
            {!!data?.symbolPhrase && <p>{capitalize(data?.symbolPhrase)}</p>}
          </Flex>
        </S.WidgetImg>
      </S.WidgetDetailsTop>
      <S.WidgetDetailsBottom color={color} active={active}>
        {!!data?.cloudiness && (
          <S.WidgetDetailsItem color={color}>
            <span>Cloudiness</span> {data?.cloudiness}%
          </S.WidgetDetailsItem>
        )}
        {!!data?.precipProb && (
          <S.WidgetDetailsItem color={color}>
            <span>Precipation</span> {data?.precipProb}%, {data?.precipRate}&nbsp;mm/h
          </S.WidgetDetailsItem>
        )}
        {!!data?.precipAccum && (
          <S.WidgetDetailsItem color={color}>
            <span>Precipation</span> {data?.precipAccum} &nbsp;mm
          </S.WidgetDetailsItem>
        )}
      </S.WidgetDetailsBottom>
    </S.WidgetDetails>
  </>
);

export default WidgetWeatherDetails;
