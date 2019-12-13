import React from 'react';
import { ICON_HEIGHT_BIG, ICON_WIDTH_BIG, ICON_HEIGHT_SMALL, ICON_WIDTH_SMALL, ICONS_PARAM } from '../../../constants';
import styles from './WeatherIcon.scss';

class WeatherIcon extends React.Component {
    weatherIcons = null;

    constructor(props) {
        super(props);
        this.width = this.props.isCurrentCity ? ICON_WIDTH_BIG : ICON_WIDTH_SMALL;
        this.height = this.props.isCurrentCity ? ICON_HEIGHT_BIG : ICON_HEIGHT_SMALL;
        this.weatherIcons = new Skycons(ICONS_PARAM);
    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        this.weatherIcons.set(this.props.iconInfo.weather, Skycons[this.props.iconInfo.iconType]);
        this.weatherIcons.play();
    }

    render() {
        return (
            <div className={ styles.weatherIcon }>
                <canvas id={this.props.iconInfo.weather} width={this.width} height={this.height}></canvas>
            </div>
            
        );
    }
}

export default WeatherIcon;