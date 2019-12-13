import React from 'react';
import { Link } from "react-router-dom";
import { Button, Grid } from '@material-ui/core';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import WeatherIcon from '../../reusable/WeatherIcon/WeatherIcon';
import CurrentDate from '../../reusable/CurrentDate/CurrentDate';
import styles from './CurrentCity.scss';

class CurrentCity extends React.Component {
    constructor(props) {
        super(props);
        this.cityData = this.props.cityData;
        this.city = this.cityData.cityName;
        this.iconType = this.cityData.iconType;
        this.temperature = this.cityData.temperature;
        this.weather = this.cityData.weather;
        this.wind = this.cityData.wind;
    }

    render() {
        return (
            <>  
                <Grid container>
                    <Grid item xs={4}>
                        <h2 className={ styles.city }>{ this.city }</h2>
                        <div className={ styles.date }>
                            <CurrentDate isTime={ true }/>
                        </div>
                        <div className={ styles.temperature }>{ this.temperature }</div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={ styles.time }>
                            <CurrentDate isTime={ false }/>
                        </div>
                        <div className={ styles.windWrapper }>
                            <span className={ styles.windText }>{this.wind}</span>
                            <span className={ styles.windIcon }>
                                <ArrowRightAltIcon />
                            </span>
                        </div>
                    </Grid>
                    <Grid container item wrap="nowrap" xs={4}>
                        <WeatherIcon iconInfo={ this.cityData } isCurrentCity={ true }/>
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
    }
}

export default CurrentCity;