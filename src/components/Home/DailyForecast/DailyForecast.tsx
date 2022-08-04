import { AxiosError } from 'axios';
import { Card, ErrorComponent, Loading, Title } from 'components';
import { ENDPOINTS } from 'consts';
import { convertToFahrenheit, getData } from 'helpers';
import React from 'react';
import { connect } from 'react-redux';
import { CombinedState, TempUnits } from 'store';
import { DailyForecastData } from 'types/interfaces';
import styles from './DailyForecast.module.scss';

interface DailyForecastProps {
  location: string;
  tempUnit: TempUnits;
}
interface DailyForecastState {
  data: DailyForecastData;
  loading: boolean;
  error: string;
}

class DailyForecast extends React.Component<DailyForecastProps, DailyForecastState> {
  accessToken: string = document.cookie.slice(6);
  constructor(props: DailyForecastProps) {
    super(props);
    this.state = {
      data: { forecast: [] },
      loading: false,
      error: ''
    };
  }
  getDailyForecast(): void {
    if (this.props.location && this.accessToken.length > 10) {
      getData(ENDPOINTS.daily, this.props.location).then(
        (data: DailyForecastData) => {
          this.setState(() => ({ loading: true, data }));
        },
        (error: Error | AxiosError) => {
          this.setState(() => ({ error: error.message }));
        }
      );
    }
  }
  componentDidMount() {
    this.getDailyForecast();
  }
  componentDidUpdate(prevProps: { location: string }) {
    if (prevProps.location !== this.props.location) {
      this.getDailyForecast();
    }
  }

  render() {
    const { data, loading, error } = this.state;
    const { tempUnit } = this.props;
    return (
      <Card id="7day">
        <Title title="7 day forecast" />
        {data.forecast.length > 0 ? (
          <ul className={styles.container}>
            {data.forecast.map(({ date, symbol, maxTemp, minTemp }, index) => (
              <li className={styles.dayContainer} key={date}>
                <p className={styles.date}>
                  {index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : date}
                </p>
                <p className={styles.maxTemp}>
                  {tempUnit === TempUnits.FAHRENHEIT
                    ? `${convertToFahrenheit(maxTemp)} °F`
                    : `${maxTemp} °C`}
                </p>
                <p className={styles.minTemp}>
                  {tempUnit === TempUnits.FAHRENHEIT
                    ? `${convertToFahrenheit(minTemp)}`
                    : `${minTemp}`}
                </p>
                <img className={styles.symbol} src={ENDPOINTS.symbol + symbol + '.png'} />
              </li>
            ))}
          </ul>
        ) : (
          loading && <Loading />
        )}
        <ErrorComponent message={error} button="TRY_AGAIN" error={error} />
      </Card>
    );
  }
}

const mapStateToProps = (state: CombinedState): { tempUnit: TempUnits } => {
  return {
    tempUnit: state.tempUnit
  };
};

export default connect(mapStateToProps)(DailyForecast);
