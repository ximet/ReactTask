import React from 'react';
import { ICON_HEIGHT_BIG, ICON_WIDTH_BIG, ICON_HEIGHT_SMALL, ICON_WIDTH_SMALL, ICONS_PARAM } from '../../../constants';
import iconHelper from './iconHelper';
import styles from './WeatherIcon.scss';

class WeatherIcon extends React.Component {
    constructor(props) {
        super(props);
        this.width = this.props.isCurrentCity ? ICON_WIDTH_BIG : ICON_WIDTH_SMALL;
        this.height = this.props.isCurrentCity ? ICON_HEIGHT_BIG : ICON_HEIGHT_SMALL;
        this.weatherIcons = new Skycons(ICONS_PARAM);

        console.log(this.props.iconInfo);
    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        // this.weatherIcons.set(this.props.iconInfo.weather, Skycons[this.props.iconInfo.iconType]);
        // console.log(iconHelper(this.props.iconInfo).iconType);

        const iconType = iconHelper(this.props.iconInfo);
        

        this.weatherIcons.set(this.props.id.toString(), iconType);
        // this.weatherIcons.set("clear-day", Skycons["CLEAR_DAY"]);
        this.weatherIcons.play();
    }

    render() {
        return (
            <div className={ styles.weatherIcon }>
                <canvas id={ this.props.id.toString() } width={this.width} height={this.height}></canvas>
            </div>            
        );
    }
}

export default WeatherIcon;