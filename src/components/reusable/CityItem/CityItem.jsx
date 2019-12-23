import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { setCurrentCityId } from '../../../actions/cityActions';
import windDirectionHelper from '../../../helpers/windDirectionHelper';
import WeatherIcon from '../../reusable/WeatherIcon/WeatherIcon';
import styles from './CityItem.scss';

class CityItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.windDirection = windDirectionHelper(this.props.city.wind.deg);
    }

    handleClick() {
        this.props.dispatch(setCurrentCityId(this.props.city.id));
    }

    render() {
        return (
            <Link to="/current" onClick={ this.handleClick }>
                <Grid className={ styles.cityItemWrapper } container>
                    <Grid id={ styles.gridItem } item xs={3}>
                        <h2 className={ styles.city }>{this.props.city.name}</h2>
                    </Grid>
                    <Grid id={ styles.gridItem } item xs={3}>
                        <div className={ styles.temperature }>{this.props.city.main.temp.toFixed()} °C</div>
                    </Grid>
                    <Grid id={ styles.gridItem } item xs={3}>
                        <div className={ styles.windWrapper }>
                            <span className={ styles.windText }>{ `${this.windDirection} ${this.props.city.wind.speed.toFixed()} m/s` }</span>
                        </div>
                    </Grid>
                    <Grid id={ styles.gridItem } container item wrap="nowrap" xs={3}>
                        <WeatherIcon iconInfo={ this.props.city.weather[0].main } id={ this.props.city.id } isCurrentCity={ false }/>
                    </Grid>
                </Grid>
            </Link>
        );
    }
}

export default connect()(CityItem);