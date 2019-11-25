import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import WeatherIcon from '../../reusable/WeatherIcon/WeatherIcon';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CurrentDate from '../../reusable/CurrentDate/CurrentDate';
import CurrentTime from '../../reusable/CurrentTime/CurrentTime';
import {
    windWrapper,
    editLocationButtonWrapper,
    editLocationButton,
    windText,
    windIcon,
    date,
    time,
    city,
    temperature
} from './CurrentCity.scss';

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
                        <h2 className={ city }>{ this.city }</h2>
                        <div className={ date }>
                            <CurrentDate />
                        </div>
                        <div className={ temperature }>{ this.temperature }</div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={ time }>
                            <CurrentTime />
                        </div>
                        <div className={ windWrapper }>
                            <span className={ windText }>{this.wind}</span>
                            <span className={ windIcon }>
                                <ArrowRightAltIcon />
                            </span>
                        </div>
                    </Grid>
                    <Grid container item wrap="nowrap" xs={4}>
                        <WeatherIcon iconInfo={ this.cityData } isCurrentCity={ true }/>
                    </Grid>
                </Grid>
                <div className={ editLocationButtonWrapper }>
                    <Link to="/cities">
                        <Button
                            size="large"
                            variant="contained"
                            color="default"
                            id={ editLocationButton }
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