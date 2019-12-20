
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
        // this.props.fetchData(`${forecastCitiesURL}?id=${citiesIdsString}&units=metric&=${openWeatherKey}`); //CHECK ERROR
    }
    
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the cities</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            console.log(this.props),
            // <h1>BooooM</h1>
            <Main cityData={ this.props.cities }/>
        );
    };
};

// MainContainer.propTypes = {
//     fetchData: PropTypes.func.isRequired,
//     cities: PropTypes.array.isRequired,
//     hasErrored: PropTypes.bool.isRequired,
//     isLoading: PropTypes.bool.isRequired
// };

const mapStateToProps = state => {
    console.log(state);
    return {
        cities: state.cities,
        hasErrored: state.citiesHasErrored,
        isLoading: state.citiesAreLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (url) => dispatch(citiesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);























// import { connect } from 'react-redux';
// import Main from '../components/blocks/Main/Main';

// export default connect(state => ({cityData: state}))(Main);