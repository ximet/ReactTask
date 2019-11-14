import React from 'react';
import styles from './styles.css';

class ClockFunction extends React.Component {

    constructor() {
        super();
        this.state = { time: new Date() };
    }

    componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); 
    }

    componentWillUnmount() { 
        clearInterval(this.update);
    }

    render() {
        const { time } = this.state; 
        return (
        <div className = {styles.clock}>
            <h2>
                {time.toLocaleTimeString()}
            </h2>
        </div>
        );
    }
}

export default ClockFunction;