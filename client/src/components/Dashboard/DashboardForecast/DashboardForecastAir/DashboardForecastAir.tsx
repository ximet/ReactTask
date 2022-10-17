import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Store
import { useAppSelector } from 'redux/hooks';
import {
  getLocationHourlyAirQuality,
  getLocationDailyAirQuality
} from 'redux/actionCreators/location';

// Components
import RequestDataWrapper from 'components/RequestDataWrapper/RequestDataWrapper';
import Carousel from 'components/Carousel/Carousel';
import Widget from 'components/Widget/Widget';

// Types
import { ForecastType } from '../DashboardForecast';

// Styles
import * as S from '../../Dashboard.styles';

interface DashboardForecastAirProps {
  selectedForecastType: string;
  infoType: string;
  query: string;
}

const DashboardForecastAir: FunctionComponent<DashboardForecastAirProps> = ({
  selectedForecastType,
  infoType,
  query
}) => {
  const [carouselChildPointerEv, setCarouselChildPointerEv] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { data, loading, error } = useAppSelector(({ location: { airQuality } }) => {
    switch (selectedForecastType) {
      case ForecastType.airQualityHourly:
      default:
        return airQuality.hourly;
      case ForecastType.airQualityDaily: {
        return airQuality.daily;
      }
    }
  });

  const handleGetLocationAirQuality = useCallback(() => {
    if (!query) return;

    switch (selectedForecastType) {
      case ForecastType.airQualityHourly:
      default:
        dispatch(getLocationHourlyAirQuality(query));
        break;
      case ForecastType.airQualityDaily: {
        dispatch(getLocationDailyAirQuality(query));
        break;
      }
    }
  }, [dispatch, query, selectedForecastType]);

  // Get data
  useEffect(() => {
    handleGetLocationAirQuality();
  }, [handleGetLocationAirQuality]);

  return (
    <S.DashboardForecastWidgets id="tabpanel" role="tabpanel">
      <RequestDataWrapper data={data} loading={loading} error={error}>
        <Carousel setCarouselChildPointerEv={setCarouselChildPointerEv}>
          {data?.map(item => (
            <Widget
              key={item.time || item.date}
              data={item}
              infoType={infoType}
              pointerEvents={carouselChildPointerEv}
            />
          ))}
        </Carousel>
      </RequestDataWrapper>
    </S.DashboardForecastWidgets>
  );
};

export default DashboardForecastAir;
