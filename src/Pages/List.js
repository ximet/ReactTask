import { useDispatch, useSelector } from 'react-redux';

import Section from '../Components/Section/Section';
import PopupPortal from '../Components/Popup/PopupPortal';

import CitiesForm from '../Components/CitiesForm/CitiesForm';
import City from '../Components/City/City';

import getCityCoords from '../Api/getCityCoords';
import getCurrentWeather from '../Api/getCurrentWeather';

import { listPageActions } from '../Store/reducers/ListPageSlice/index';

const List = () => {
  const dispatch = useDispatch();
  const { currentCountry, city, cityWeather, error } = useSelector(state => state.listPage);

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
          if (data != undefined) {
            getCurrentWeather(data)
              .then(data => {
                console.log(data);
                dispatch(listPageActions.setCityWeather(data));
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            dispatch(listPageActions.setError('Сity is not found!'));
          }
        })
        .catch(() => {
          dispatch(listPageActions.setError('Сity is not found!'));
        });
    }
  };

  const closePopup = () => {
    dispatch(listPageActions.setError(false));
  };
  return (
    <>
      {error && <PopupPortal close={closePopup} message={error} />}
      <Section>
        <h1>Search city</h1>
        <CitiesForm
          submitForm={submitForm}
          getCurrentCountry={getCurrentCountry}
          currentCountry={currentCountry}
          getCity={getCity}
          city={city}
        />
        <City weather={cityWeather} />
        {/* <CitiesList citiesArray={citiesArray} /> */}
      </Section>
    </>
  );
};

export default List;
