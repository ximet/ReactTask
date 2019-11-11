import React from 'react';
import Icon from 'react-eva-icons';
import constant from 'data/const';
import styles from './MainView';

import Button from 'Components/UI/Button';
import List from 'Components/UI/List';

import WeatherList from 'Components/Weather/WeatherList';
import WeatherCard from 'Components/Weather/WeatherCard';

class MainView extends React.Component {
  constructor() {
    super(),
    this.state = {
      items: undefined,
      displayCard: true,
    }
  }

  showWeatherCard = () => {
    this.setState( {displayCard: true} );
  }

  getWeatherItems = () => {
    const weatherItems = [];

    constant.PLACES.map((place, id) => {
      weatherItems.push({
        id: place.id,
        location: place.city + ', ' + place.country,
      });
    });
    this.setState( {items: weatherItems, displayCard: false} );
  }

  render() {
    return (
      <main className={styles.mainView}>
        { this.state.items && !this.state.displayCard
          ? <WeatherList items={this.state.items}/>
          : <WeatherCard location={constant.CITY + ', ' + constant.COUNTRY}/>
        }
        { this.state.displayCard
          ? (
            <Button
              onClick={this.getWeatherItems}
              label={'More'}
              iconRight={
                <Icon
                  name='arrow-forward'
                  size='large'
                  fill='#FFF'
                  animation={{
                    type: 'shake',
                    hover: true,
                    infinite: false
                  }}
                />
              }
            />
          )
          : (
            <Button
              onClick={this.showWeatherCard}
              label={'Back'}
              iconLeft={
                <Icon
                  name='arrow-back'
                  size='large'
                  fill='#FFF'
                  animation={{
                    type: 'shake',
                    hover: true,
                    infinite: false
                  }}
                />
              }
            />
          )
        }
      </main>
    );
  }
};

export default MainView;
