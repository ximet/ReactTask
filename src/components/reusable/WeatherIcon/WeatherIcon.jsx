import React from 'react';
import { ICON_HEIGHT_BIG, ICON_WIDTH_BIG, ICON_HEIGHT_SMALL, ICON_WIDTH_SMALL } from '../../../constants';
import { ICONS_PARAM } from '../../../constants';
import { weatherIcon } from './WeatherIcon.scss';

class WeatherIcon extends React.Component {
    constructor(props) {
        super(props);
        const iconInfo = this.props.iconInfo;
        const isCurrentCity = this.props.isCurrentCity;
        this.weather = iconInfo.weather;
        this.iconType = iconInfo.iconType;
        this.width = isCurrentCity ? ICON_WIDTH_BIG : ICON_WIDTH_SMALL;
        this.height = isCurrentCity ? ICON_HEIGHT_BIG : ICON_HEIGHT_SMALL;
        this.weatherIcons = new Skycons(ICONS_PARAM);
    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        this.weatherIcons.set(this.weather, Skycons[this.iconType]);
        this.weatherIcons.play();
    }

    render() {
        return (
            <div className={ weatherIcon }>
                <canvas id={this.weather} width={this.width} height={this.height}></canvas>
            </div>
            
        );
    }
}

export default WeatherIcon;