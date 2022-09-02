import Section from '../Components/Section/Section';
import PopupPortal from '../Components/Popup/PopupPortal';
import City from '../Components/City/City';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { popupActions } from '../Store/reducers/PopupSlice/index';

import { useGeolocated } from 'react-geolocated';
import getCurrentWeather from '../Api/getCurrentWeather';
import getCity from '../Api/getCity';

const Homepage = () => {
  const dispatch = useDispatch();
  const { popupMessage } = useSelector(state => state.popup);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 1000
  });

  const [currentWeather, setCurrentWeather] = useState(null);

  // getting City name by coords
  useEffect(() => {
    if (isGeolocationAvailable && isGeolocationEnabled && coords) {
      getCity({ latitude: coords.latitude, longitude: coords.longitude })
        .then(data => {
          getCurrentWeather(data)
            .then(data => {
              setCurrentWeather(data);
            })
            .catch(() => {
              dispatch(popupActions.setMessage('Сity is not found!'));
            });
        })
        .catch(() => {
          dispatch(popupActions.setMessage('Сity is not found!'));
        });
    }
  }, [coords]);

  return (
    <>
      {popupMessage && <PopupPortal message={popupMessage} />}
      <Section>{currentWeather && <City weather={currentWeather} />}</Section>
    </>
  );
};

export default Homepage;
