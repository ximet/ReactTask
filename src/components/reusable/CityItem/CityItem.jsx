import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import WeatherIcon from '../../reusable/WeatherIcon/WeatherIcon';
import { Link } from "react-router-dom";
import {
    cityItemWrapper,
    windWrapper,
    gridItem,
    windText,
    city,
    temperature
} from './CityItem.scss';
import { setCurrentCity } from '../../../actions/cityActions';

class CityItem extends React.Component {
    constructor(props) {
        super(props);
        this.cityData = this.props.cityData;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.cityData.isCurrentCity = true;
        this.props.dispatch(setCurrentCity(this.cityData));
    }

    render() {
        return (
            <Link to="/" onClick={ this.handleClick }>
                <Grid className={ cityItemWrapper } container>
                    <Grid id={ gridItem } item xs={3}>
                        <h2 className={ city }>{this.cityData.cityName}</h2>
                    </Grid>
                    <Grid id={ gridItem } item xs={3}>
                        <div className={ temperature }>{this.cityData.temperature}</div>
                    </Grid>
                    <Grid id={ gridItem } item xs={3}>
                        <div className={ windWrapper }>
                            <span className={ windText }>{ this.cityData.wind }</span>
                        </div>
                    </Grid>
                    <Grid id={ gridItem } container item wrap="nowrap" xs={3}>
                        <WeatherIcon iconInfo={ this.cityData } isCurrentCity={ false }/>
                    </Grid>
                </Grid>
            </Link>
        );
    
    }
}

export default connect()(CityItem);