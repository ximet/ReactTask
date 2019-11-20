import React from 'react';
import {connect} from 'react-redux';
import {getWeatherInfo} from 'actions';
import ListPane from 'components/WeatherPanes/ListPane';

class World extends React.PureComponent{

  componentDidMount(){
    this.props.dispatch({...getWeatherInfo});
  }

  render(){
    return ( 
      this.props.weatherInfo.map((el) => <ListPane key={el.location} {...el} />)
    );
  }
}

const mapStateToProps = ({WeatherInfoReducer}) => {
  const reducer = WeatherInfoReducer;
  return {
    weatherInfo: reducer.weatherInfo
  }
}

export default connect(mapStateToProps)(World);
