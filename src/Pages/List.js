import { useDispatch, useSelector } from 'react-redux';

import Section from '../Components/Section/Section';
import PopupPortal from '../Components/Popup/PopupPortal';

import CitiesForm from '../Components/CitiesForm/CitiesForm';
import City from '../Components/City/City';

import getCityCoords from '../Api/getCityCoords';
import getCurrentWeather from '../Api/getCurrentWeather';

import { listPageActions } from '../Store/reducers/ListPageSlice/index';
import { popupActions } from '../Store/reducers/PopupSlice/index';

const List = () => {
  const dispatch = useDispatch();
  const { currentCountry, city, cityWeather } = useSelector(state => state.listPage);
  const { popupMessage } = useSelector(state => state.popup);

  const getCity = e => {
    dispatch(listPageActions.setCity(e.target.value));
  };

  const getCurrentCountry = e => {
    dispatch(listPageActions.setCurrentCountry(e.target.value));
  };

  const submitForm = e => {
    e.preventDefault();

    if (city) {
      getCityCoords(city)
        .then(data => {
          if (data) {
            getCurrentWeather(data)
              .then(data => {
                dispatch(listPageActions.setCityWeather(data));
              })
              .catch(() => {
                dispatch(popupActions.setMessage('Сity is not found!'));
              });
          } else {
            dispatch(popupActions.setMessage('Сity is not found!'));
          }
        })
        .catch(() => {
          dispatch(popupActions.setMessage('Сity is not found!'));
        });
    }
  };

  return (
    <>
      {popupMessage && <PopupPortal message={popupMessage} />}
      <Section>
        <h1>Search city</h1>
        <CitiesForm
          submitForm={submitForm}
          getCurrentCountry={getCurrentCountry}
          currentCountry={currentCountry}
          getCity={getCity}
          city={city}
        />
        {cityWeather && <City weather={cityWeather} />}
      </Section>
    </>
  );
};

export default List;
