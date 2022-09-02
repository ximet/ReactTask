import { useState } from 'react';

import styles from './CitiesForm.css';

import { Country, City } from 'country-state-city';

const CitiesForm = props => {
  const countries = Country.getAllCountries();

  return (
    <form className={styles.form} onSubmit={props.submitForm}>
      <div className={styles.selectWrap}>
        <select
          className={styles.select}
          name="country"
          defaultValue="0"
          onChange={props.getCurrentCountry}
        >
          <option value="0" disabled>
            Country
          </option>
          {countries.map(item => {
            return (
              <option key={item.name} value={item.isoCode}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      {props.currentCountry && (
        <div className={styles.selectWrap}>
          <select className={styles.select} name="city" defaultValue="0" onChange={props.getCity}>
            <option value="0" disabled>
              City
            </option>
            {City.getCitiesOfCountry(props.currentCountry).map(item => {
              return (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <div className={styles.inputWrap}>
        <input
          className={styles.input}
          type="text"
          name="city"
          onChange={props.getCity}
          value={props.city}
          placeholder="City"
        />
        <button className={styles.btn} type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default CitiesForm;
