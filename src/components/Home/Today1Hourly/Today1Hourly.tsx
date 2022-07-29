import { AxiosError } from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { convertToFahrenheit } from '../../../helpers/convertToFahrenheit';
import { HourlyData } from '../../../helpers/Interfaces';
import { CombinedState } from '../../../store/index-redux';
import { TempUnits } from '../../../store/tempUnits-redux';
import { Theme, ThemeContext } from '../../../store/theme-context';
import Card from '../../UI/Card/Card';
import ErrorComponent from '../../UI/ErrorComponent/ErrorComponent';
import Loading from '../../UI/Loading/Loading';
import { ENDPOINTS, getData } from './../../../helpers/api';
import Title from './../../UI/Title/Title';
import styles from './Today1Hourly.module.scss';

interface Today1HourlyProps {
  location: string;
  tempUnit: TempUnits;
}
interface Today1HourlyState {
  data: HourlyData;
  loading: boolean;
  error: string;
}

class Today1Hourly extends React.Component<Today1HourlyProps, Today1HourlyState> {
  constructor(props: Today1HourlyProps) {
    super(props);
    this.state = {
      data: { forecast: [] },
      loading: false,
      error: ''
    };
  }

  getHourlyData(): void {
    getData(ENDPOINTS.hourly, this.props.location).then(
      (data: HourlyData) => {
        this.setState(() => ({ loading: true, data }));
      },
      (error: Error | AxiosError) => {
        this.setState(() => ({ error: error.message }));
      }
    );
  }

  componentDidMount() {
    this.getHourlyData();
  }
  componentDidUpdate(prevProps: { location: string }) {
    if (prevProps.location !== this.props.location) {
      this.getHourlyData();
    }
  }

  render() {
    const { data, loading, error } = this.state;
    const { tempUnit } = this.props;
    return (
      <Card>
        <div id="hourly">
          <Title title="Hourly forecast" />
          {data.forecast.length > 0 ? (
            <>
              <div
                className={`${styles.container} ${
                  this.context.theme === Theme.DARK && styles[Theme.DARK]
                }`}
              >
                <svg height={'400'} width={'1000'} className={styles.svgBackground}>
                  <text x={'0'} y={'15'} className={styles.tempScale}>
                    {tempUnit === TempUnits.FAHRENHEIT
                      ? `${convertToFahrenheit(40)} °F`
                      : `${40} °C`}
                  </text>
                  <text x={'0'} y={'100'} className={styles.tempScale}>
                    {tempUnit === TempUnits.FAHRENHEIT
                      ? `${convertToFahrenheit(30)} °F`
                      : `${30} °C`}
                  </text>
                  <text x={'0'} y={'200'} className={styles.tempScale}>
                    {tempUnit === TempUnits.FAHRENHEIT
                      ? `${convertToFahrenheit(20)} °F`
                      : `${20} °C`}
                  </text>
                  <text x={'0'} y={'300'} className={styles.tempScale}>
                    {tempUnit === TempUnits.FAHRENHEIT
                      ? `${convertToFahrenheit(10)} °F`
                      : `${10} °C`}
                  </text>
                  <text x={'0'} y={'400'} className={styles.tempScale}>
                    {tempUnit === TempUnits.FAHRENHEIT ? `${convertToFahrenheit(0)} °F` : `${0} °C`}
                  </text>
                  <line x1={'20'} x2={'1000'} y1={'0'} y2={'0'} stroke={'#245f763b'}></line>
                  <line x1={'20'} x2={'1000'} y1={'100'} y2={'100'} stroke={'#245f763b'}></line>
                  <line x1={'20'} x2={'1000'} y1={'200'} y2={'200'} stroke={'#245f763b'}></line>
                  <line x1={'20'} x2={'1000'} y1={'300'} y2={'300'} stroke={'#245f763b'}></line>
                  <line x1={'20'} x2={'1000'} y1={'400'} y2={'400'} stroke={'#245f763b'}></line>
                </svg>
                {data.forecast.map(
                  ({ time, symbol, temperature, precipAccum }, index, forecastData) => (
                    <div className={styles.hourContainer} key={time}>
                      <p className={styles.time}>{time.slice(11, 16)}</p>
                      <img
                        className={styles.symbol}
                        src={ENDPOINTS.symbol + symbol + '.png'}
                        style={{ top: `${350 - temperature * 10}px` }}
                      />
                      <svg height={'400'} width={'40'} className={styles.svgTemperature}>
                        <line
                          x1={'4'}
                          x2={forecastData[index + 1] ? '40' : '0'}
                          y1={400 - temperature * 10}
                          y2={
                            400 - forecastData[index + 1]?.temperature * 10 ||
                            400 - temperature * 10
                          }
                          stroke={'red'}
                        ></line>
                        <circle
                          cy={400 - temperature * 10}
                          cx={'4'}
                          r="4"
                          fill={'red'}
                          className={styles.circle}
                        ></circle>
                        <text className={styles.textTemperature} x={'4'} y={385 - temperature * 10}>
                          {tempUnit === TempUnits.FAHRENHEIT
                            ? `${convertToFahrenheit(temperature)} °F`
                            : `${temperature} °C`}
                        </text>
                      </svg>
                      <div
                        className={styles.precipAccum}
                        style={{
                          height: `${precipAccum! * 30}%`,
                          top: `${100 - precipAccum! * 30}%`
                        }}
                      >
                        <p className={styles.precipAccumNumber}>{precipAccum}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
              <p className={styles.precipLabel}>Precipitation mm/hour</p>
            </>
          ) : loading ? (
            <Loading />
          ) : (
            error && <ErrorComponent message={error} button="TRY_AGAIN" />
          )}
        </div>
      </Card>
    );
  }
}
Today1Hourly.contextType = ThemeContext;
const mapStateToProps = (state: CombinedState): { tempUnit: TempUnits } => {
  return {
    tempUnit: state.tempUnit
  };
};

export default connect(mapStateToProps)(Today1Hourly);
