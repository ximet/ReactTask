import React from 'react';
import styles from 'assets/css/styles.css';
import Icon from 'components/reusable/icons/Icon';


import ListPane from 'components/WeatherPanes/ListPane';


class World extends React.Component {
  constructor(props){
    super();
    this.WeatherList = props.WeatherInfo.map((el, i)=>
      <ListPane key={i.toString()} {...el} />
    )
  }
  render() {
    return ( 
      <div className={styles.row}>
        <div className={styles.col}>
          {this.WeatherList}
        </div>
      </div>
    );
  }
}

export default World;
  