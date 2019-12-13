import React from 'react';
import { Paper } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import CurrentCity from '../../pages/CurrentCity/CurrentCity';
import CityItem from '../../reusable/CityItem/CityItem';
import styles from './Main.scss';

const Main = (props) => {
    const { cityWeatherReducer } = props.cityData;

    return (
        <main className={ styles.mainWrapper }>
            <Switch>
                <Route exact path="/">
                    <Paper className={ styles.mainContent }>
                        <CurrentCity cityData={ cityWeatherReducer.currentCity }/>
                    </Paper>
                </Route>
                <Route exact path="/cities">
                    { cityWeatherReducer.allCities.map(city => (
                            <Paper key={city.id} className={ styles.cityItemWrapper }>
                                <CityItem cityData={ city } />
                            </Paper>
                        )) 
                    }
                </Route>
            </Switch>
        </main>
    );
}

export default Main;