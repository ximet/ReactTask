import React, { FunctionComponent, useMemo } from 'react';

// Types
import { WeatherInfo } from '../../../types';

// Styles
import { Flex } from '../../styles/global';
import * as S from './styles';

// Utils
import dateFormatter from '../../utils/dateFormatter';
import { capitalize, getWeatherSymbol } from '../../utils/helpers';

interface WidgetProps {
  color: string;
  data: WeatherInfo;
  isLoading: boolean;
  isError: boolean;
}

const Widget: FunctionComponent<WidgetProps> = ({ color, data, isLoading, isError }) => {
  const timeStamp = useMemo(() => data && dateFormatter(data.time), [data]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Something went wrong...</p>;
  } else {
    content = (
      <S.Widget color={color}>
        <S.WidgetHeader color={color}>
          <Flex justifySpaceBetween>
            <time dateTime={timeStamp.day}>{timeStamp.day}</time>
            <time dateTime={timeStamp.time}>{timeStamp.time}</time>
          </Flex>
        </S.WidgetHeader>
        <S.WidgetBody>
          <Flex>
            <S.WidgetDetails>
              <S.WidgetTemp>{data.temperature}°</S.WidgetTemp>
              <S.WidgetDetailsItem color={color}>
                <span>Real Feel</span> {data.feelsLikeTemp}°
              </S.WidgetDetailsItem>
              <S.WidgetDetailsItem color={color}>
                <span>Wind</span> {data.windDirString}, speed {data.windSpeed}&nbsp;m/s, gust{' '}
                {data.windGust} m/s
              </S.WidgetDetailsItem>
              <S.WidgetDetailsItem color={color}>
                <span>Pressure</span> {data.pressure}
              </S.WidgetDetailsItem>
              <S.WidgetDetailsItem color={color}>
                <span>Humidity</span> {data.relHumidity}%
              </S.WidgetDetailsItem>
            </S.WidgetDetails>
            <S.WidgetDetails>
              <S.WidgetImg>
                <Flex directionColumn>
                  <img src={getWeatherSymbol(data.symbol)} alt={data.symbolPhrase} />
                  <p>{capitalize(data.symbolPhrase)}</p>
                </Flex>
              </S.WidgetImg>
              <S.WidgetDetailsItem color={color}>
                <span>Cloudiness</span> {data.cloudiness}%
              </S.WidgetDetailsItem>
              <S.WidgetDetailsItem color={color}>
                <span>Precipation</span> {data.precipProb}%, {data.precipRate}&nbsp;mm/h
              </S.WidgetDetailsItem>
            </S.WidgetDetails>
          </Flex>
        </S.WidgetBody>
      </S.Widget>
    );
  }

  return <>{content}</>;
};

export default Widget;
