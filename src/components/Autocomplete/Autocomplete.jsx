import React, { useEffect } from 'react';
import AutocompleteOption from '../AutocompleteOption/AutocompleteOption';
import classes from './Autocomplete.module.scss';

const Autocomplete = ({ display, options, onOptionSelect }) => {
  // useEffect(() => {}, [display, options]);

  return (
    <div className={classes.autocomplete}>
      {display &&
        (options?.length ? (
          options.map(location => (
            <AutocompleteOption key={location.id} location={location} selected={onOptionSelect} />
          ))
        ) : (
          <div className="search__loading">No matches</div>
        ))}
    </div>
  );
};

export default Autocomplete;
