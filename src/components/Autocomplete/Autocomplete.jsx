import React from 'react';
import { sortLocations } from '../../utils';
import AutocompleteOption from '../AutocompleteOption/AutocompleteOption';
import classes from './Autocomplete.module.scss';

const Autocomplete = ({ display, options, onOptionSelect }) => {
  return (
    <div className={classes.autocomplete}>
      {display &&
        (options?.length ? (
          sortLocations(options).map(location => (
            <AutocompleteOption key={location.id} location={location} selected={onOptionSelect} />
          ))
        ) : (
          <div className={classes.noMatches}>No matches</div>
        ))}
    </div>
  );
};

export default Autocomplete;
