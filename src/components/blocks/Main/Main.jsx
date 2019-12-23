import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import CurrentCity from '../../pages/CurrentCity/CurrentCity';
import CityItem from '../../reusable/CityItem/CityItem';
import styles from './Main.scss';

const Main = props => (
    <main className={ styles.mainWrapper }>
        <Switch>
            <Route exact path="/current">
                <Paper className={ styles.mainContent }>
                    <CurrentCity cities={ props.cityData }/>
                </Paper>
            </Route>
            <Route exact path="/">
                { props.cityData.map(city => (
                        <Paper key={city.id} className={ styles.cityItemWrapper }>
                            <CityItem city={ city }/>
                        </Paper>
                    )) 
                }
            </Route>
        </Switch>
    </main>
);

export default Main;