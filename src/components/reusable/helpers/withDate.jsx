import React from "react";

class withDate extends React.Component {
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
            <FormattedDate date={ this.state.date }/>
        );
    }

}

export default withDate;