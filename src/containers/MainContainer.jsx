
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Main from '../components/blocks/Main/Main';
import { citiesFetchData } from '../actions/cityActions';
import cities from '../assets/cities';

const forecastCitiesURL = process.env.FORECAST_CITIES_URL;
const openWeatherKey= process.env.OPEN_WEATHER_KEY;
const citiesId = cities.map(city => city.id);
const citiesIdsString = citiesId.join(",");

class MainContainer extends Component {
    componentDidMount() {
        this.props.fetchData(`${forecastCitiesURL}?id=${citiesIdsString}&units=metric&APPID=${openWeatherKey}`);
        // this.props.fetchData(`${forecastCitiesURL}?id=${citiesIdsString}&units=metric&=${openWeatherKey}`); // FOR CHECKING AN ERROR
    }
    
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the cities</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <Main cityData={ this.props.cities }/>
        );
    };
};

MainContainer.propTypes = {
    fetchData: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
        cities: state.cities,
        hasErrored: state.citiesHasErrored,
        isLoading: state.citiesAreLoading
    }
);

const mapDispatchToProps = dispatch => ({
        fetchData: (url) => dispatch(citiesFetchData(url))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);