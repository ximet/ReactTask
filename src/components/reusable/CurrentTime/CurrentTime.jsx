import React from "react";
import FormattedTime from './FormattedTime/FormattedTime';

class CurrentTime extends React.Component {
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
            <FormattedTime date={ this.state.date }/>
        );
    }

}

export default CurrentTime;