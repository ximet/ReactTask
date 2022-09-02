import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cityPageDetailsActions } from '../Store/reducers/CityPageDetailsSlice/index';
import { popupActions } from '../Store/reducers/PopupSlice/index';

import getCityCoords from '../Api/getCityCoords';
import getDetailWeather from '../Api/getDetailWeather';

import Section from '../Components/Section/Section';
import PopupPortal from '../Components/Popup/PopupPortal';

import CityDetails from '../Components/CityDetails/CityDetails';

const CityPage = () => {
  const dispatch = useDispatch();
  const { city, cityDetails } = useSelector(state => state.cityPageDetails);
  const { popupMessage } = useSelector(state => state.popup);

  let location = useLocation();

  useEffect(() => {
    dispatch(cityPageDetailsActions.setCity(decodeURI(location.pathname.split('=')[1])));
  }, [location]);

  useEffect(() => {
    if (city) {
      getCityCoords(city)
        .then(data => {
          getDetailWeather({ latitude: data.latitude, longitude: data.longitude })
            .then(data => {
              dispatch(cityPageDetailsActions.setCityDetails(data));
            })
            .catch(() => {
              dispatch(popupActions.setMessage('Сity is not found!'));
            });
        })
        .catch(() => {
          dispatch(popupActions.setMessage('Сity is not found!'));
        });
    }
  }, [city]);

  return (
    <>
      {popupMessage && <PopupPortal message={popupMessage} />}
      <Section>{cityDetails && <CityDetails city={city} weather={cityDetails} />}</Section>
    </>
  );
};

export default CityPage;
