import React from "react";
import FormattedTime from './FormattedTime/FormattedTime';

class CurrentTime extends React.Component {
    constructor(props) {
        super(props);
        this.secondsInOneMinute = 60000;
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