import React from "react";

class CurrentDate extends React.Component {
    today = null;
    date = null;

    constructor() {
        super();
        this.today = new Date();
        this.getDate();
    }

    getDate() {
        this.date = `${this.today.getDate()}.${this.today.getMonth()}.${this.today.getFullYear()}`;
    }

    render() {
        return (
            <div>{ this.date }</div>
        );
    }

}

export default CurrentDate;