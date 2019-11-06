import React from 'react';
import PropTypes from 'prop-types';
import styles from 'assets/css/styles.css';
import Store from 'Store';

import Icon from 'components/reusable/icons/Icon';

class ListPane extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log('pep')
    this.getTempUnit();
  }

  // componentWillUnmount() {
  // }

  getTempUnit() {
    Store.subscribe('SET_TEMP_UNIT', () => {
      console.log(Store.getProp('tempUnit'))
      this.setState({
        ...Store.getProp('tempUnit')
      });
    })
  }
  
  render() {
    const {weatherStateIcon, temperature, icon, location} = this.props;
    return (
      <div className={styles.WeatherListPane}>
        <div className={styles.location}>
          {location}
          <Icon path={icon} />
        </div>
        <div className={styles.temperature}>
          <span className={styles.value}>{temperature}</span>
          <span className={styles.unit}>{this.state.unit}</span>
        </div>
        <div className={styles.weatherIcon}>
          <Icon path={weatherStateIcon} />
        </div>
      </div>
    );
  }
}

ListPane.propTypes = {
  location: PropTypes.string.isRequired,
  icon: PropTypes.string,
  temperature: PropTypes.string,
  weatherStateIcon: PropTypes.string,
};

export default ListPane;
