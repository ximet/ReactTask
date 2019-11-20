import React from 'react';
import styles from 'assets/css/styles.scss';

const clockInterval = 1000;

class Clock extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      clockInterval
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div className={styles.appClock}>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default Clock;
