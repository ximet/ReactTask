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
    }

    handleClick() {
        this.props.cityData.isCurrentCity = true;
        this.props.dispatch(setCurrentCity(this.props.cityData));
    }

    render() {
        return (
            <Link to="/" onClick={ this.handleClick }>
                <Grid className={ styles.cityItemWrapper } container>
                    <Grid id={ styles.gridItem } item xs={3}>
                        <h2 className={ styles.city }>{this.props.cityData.cityName}</h2>
                    </Grid>
                    <Grid id={ styles.gridItem } item xs={3}>
                        <div className={ styles.temperature }>{this.props.cityData.temperature}</div>
                    </Grid>
                    <Grid id={ styles.gridItem } item xs={3}>
                        <div className={ styles.windWrapper }>
                            <span className={ styles.windText }>{ this.props.cityData.wind }</span>
                        </div>
                    </Grid>
                    <Grid id={ styles.gridItem } container item wrap="nowrap" xs={3}>
                        <WeatherIcon iconInfo={ this.props.cityData } isCurrentCity={ false }/>
                    </Grid>
                </Grid>
            </Link>
        );
    
    }
}

export default connect()(CityItem);