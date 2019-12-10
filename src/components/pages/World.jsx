import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import City from 'components/pages/City';
import PropTypes from 'prop-types';
import { fetchAllWeatherData } from 'actions';
import ListPane from 'components/WeatherPanes/ListPane';

class World extends React.PureComponent{

  componentDidMount(){
    this.props.dispatch(fetchAllWeatherData());
  }

  render(){
    return (
      <Switch>
        <Route exact path={'/world'}>
          {this.props.weatherDataList.map((el) => <ListPane key={el.id} {...el} />)}
        </Route>
        <Route path={'/world/:cityId'} component={City} />
      </Switch>
    );
  }
}

World.propTypes = {
  weatherDataList: PropTypes.array.isRequired,
};

const mapStateToProps = ({ AllWeatherInfoReducer }) => {
  const { weatherData } = AllWeatherInfoReducer;
  return {
    weatherDataList: weatherData.list,
  }  
}

export default connect(mapStateToProps)(World);
