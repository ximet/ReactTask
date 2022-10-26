import React, { FunctionComponent, useMemo, useState } from 'react';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';

// Types
import { ForecastType } from 'components/Dashboard/DashboardForecast/DashboardForecast.utils';
import { AirQualityInfo, WeatherInfo } from 'types';

// Components
import WidgetWeatherDetails from 'components/Widget/WidgetWeatherDetails/WidgetWeatherDetails';
import WidgetAirDetails from 'components/Widget/WidgetAirDetails/WidgetAirDetails';

// Utils
import dateFormatter from 'utils/dateFormatter';

// Styles
import { Flex } from 'styles/global';
import * as S from './Widget.styles';

// Constants
import { FORECAST_LABEL } from '../../constants';

interface WidgetProps {
  color?: string;
  data?: AirQualityInfo | WeatherInfo | null;
  infoType?: string;
  selectedForecastType?: ForecastType;
  pointerEvents?: boolean;
}

const Widget: FunctionComponent<WidgetProps> = ({
  color,
  data,
  infoType = FORECAST_LABEL,
  selectedForecastType,
  pointerEvents
}) => {
  const theme = useAppSelector(selectTheme);

  const [active, setActive] = useState<boolean>(false);

  const timeStamp = useMemo(() => data && dateFormatter(data.time || data.date), [data]);

  return (
    <S.Widget
      aria-roledescription="widget"
      themeType={theme}
      color={color}
      active={active}
      onClick={() => setActive(!active)}
      pointerEvents={pointerEvents?.toString()}
    >
      <S.WidgetHeader
        color={color}
        themeType={theme}
        active={active}
        selectedForecastType={selectedForecastType}
      >
        <Flex justifySpaceBetween>
          <time dateTime={timeStamp?.day}>{timeStamp?.day}</time>
          <time dateTime={timeStamp?.time}>{timeStamp?.time}</time>
        </Flex>
      </S.WidgetHeader>
      <S.WidgetBody color={color} active={active}>
        {infoType === FORECAST_LABEL ? (
          <WidgetWeatherDetails color={color} data={data} active={active} />
        ) : (
          <WidgetAirDetails color={color} data={data} active={active} />
        )}
      </S.WidgetBody>
    </S.Widget>
  );
};

export default Widget;
