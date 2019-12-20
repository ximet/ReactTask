import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import WeatherIcon from '../../reusable/WeatherIcon/WeatherIcon';
import styles from './CityItem.scss';
import { setCurrentCity } from '../../../actions/cityActions';

class CityItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // console.log(this.props.cityData);
    }

    handleClick() {
        this.props.cityData.isCurrentCity = true; // TODO: move it to redux
        // this.props.dispatch(setCurrentCity(this.props.cityData));
    }

    render() {
        return (
            <Link to="/current" onClick={ this.handleClick }>
                <Grid className={ styles.cityItemWrapper } container>
                    <Grid id={ styles.gridItem } item xs={3}>
                        <h2 className={ styles.city }>{this.props.cityData.name}</h2>
                    </Grid>
                    <Grid id={ styles.gridItem } item xs={3}>
                        <div className={ styles.temperature }>{this.props.cityData.main.temp}</div>
                    </Grid>
                    <Grid id={ styles.gridItem } item xs={3}>
                        <div className={ styles.windWrapper }>
                            <span className={ styles.windText }>{ this.props.cityData.wind.speed }</span>
                        </div>
                    </Grid>
                    <Grid id={ styles.gridItem } container item wrap="nowrap" xs={3}>
                        <WeatherIcon iconInfo={ this.props.cityData.weather[0].main } id={ this.props.cityData.id } isCurrentCity={ false }/>
                    </Grid>
                </Grid>
            </Link>
        );

        // return <h2>GoooD</h2>
    }
}

export default connect()(CityItem);