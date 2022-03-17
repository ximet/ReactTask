import React from 'react';
import classes from './Timepiece.module.scss';

export default class Timepiece extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    this.locale = 'en-US';
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className={classes.timepiece}>
        <span>{this.state.date.toLocaleDateString(this.locale, this.dateOptions)}</span>
        <span>{this.state.date.toLocaleTimeString(this.locale)}</span>
      </div>
    );
  }
}
