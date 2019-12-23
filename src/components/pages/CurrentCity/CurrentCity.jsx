import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import windDirectionHelper from '../../../helpers/windDirectionHelper';
import WeatherIcon from '../../reusable/WeatherIcon/WeatherIcon';
import CurrentDate from '../../reusable/CurrentDate/CurrentDate';
import styles from './CurrentCity.scss';

const CurrentCity = (props) => {
    const [city] = props.cities.filter(city => city.id === props.cityId);
    const windDirection = windDirectionHelper(city.wind.deg);

    return (
        <>   
            <Grid container>
                <Grid item xs={4}>
                    <h2 className={ styles.city }>{ city.name }</h2>
                    <div className={ styles.date }>
                        <CurrentDate isTime={ true }/>
                    </div>
                    <div className={ styles.temperature }>{ `${city.main.temp.toFixed()} °C` }</div>
                </Grid>
                <Grid item xs={4}>
                    <div className={ styles.time }>
                        <CurrentDate isTime={ false }/>
                    </div>
                    <div className={ styles.windWrapper }>
                        <span className={ styles.windDirection }>{ windDirection }</span>
                        <span className={ styles.windSpeed }>{ city.wind.speed.toFixed() }</span>
                        <span className={ styles.speedDimension }>m/s</span>
                        <span className={ styles.windIcon }>
                            <ArrowRightAltIcon />
                        </span>
                    </div>
                </Grid>
                <Grid container item wrap="nowrap" xs={4}>
                    <WeatherIcon iconInfo={ city.weather[0].main } id={ city.id } isCurrentCity={ true }/>
                </Grid>
            </Grid>
            <div className={ styles.editLocationButtonWrapper }>
                <Link to="/">
                    <Button
                        size="large"
                        variant="contained"
                        color="default"
                        id={ styles.editLocationButton }
                        startIcon={ <EditLocationIcon fontSize="large"/> }
                    >
                        More
                    </Button>
                </Link>
            </div>
        </>
    );
}

export default connect(state => ({cityId: state.currentCityId}))(CurrentCity);