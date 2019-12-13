import React from 'react';
import { Link } from "react-router-dom";
import { Button, Grid } from '@material-ui/core';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import WeatherIcon from '../../reusable/WeatherIcon/WeatherIcon';
import CurrentDate from '../../reusable/CurrentDate/CurrentDate';
import styles from './CurrentCity.scss';

const CurrentCity = (props) => (
    <>   
        <Grid container>
            <Grid item xs={4}>
                <h2 className={ styles.city }>{ props.cityData.cityName }</h2>
                <div className={ styles.date }>
                    <CurrentDate isTime={ true }/>
                </div>
                <div className={ styles.temperature }>{ props.cityData.temperature }</div>
            </Grid>
            <Grid item xs={4}>
                <div className={ styles.time }>
                    <CurrentDate isTime={ false }/>
                </div>
                <div className={ styles.windWrapper }>
                    <span className={ styles.windText }>{ props.cityData.wind }</span>
                    <span className={ styles.windIcon }>
                        <ArrowRightAltIcon />
                    </span>
                </div>
            </Grid>
            <Grid container item wrap="nowrap" xs={4}>
                <WeatherIcon iconInfo={ props.cityData } isCurrentCity={ true }/>
            </Grid>
        </Grid>
        <div className={ styles.editLocationButtonWrapper }>
            <Link to="/cities">
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

export default CurrentCity;