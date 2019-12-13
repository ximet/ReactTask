import React from "react";
import FormattedDate from '../FormattedDate/FormattedDate';
import FormattedTime from '../FormattedTime/FormattedTime';

class CurrentDate extends React.Component {
    secondsInOneMinute = 60000;

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), this.secondsInOneMinute);
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
            this.props.isTime ?
            <FormattedDate date={ this.state.date }/> :
            <FormattedTime date={ this.state.date }/>
        );
    }

}

export default CurrentDate;