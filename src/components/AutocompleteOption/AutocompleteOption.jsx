import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './AutocompleteOption.module.scss';

const AutocompleteOption = ({ location, selected }) => {
  const history = useHistory();

  const handleMouseDown = () => {
    history.push(`/location/${location.id}`);
    selected();
  };

  return (
    <div onMouseDown={handleMouseDown} className={classes.option}>
      <span>{`${location.name}, ${location.country}`}</span>
    </div>
  );
};

export default AutocompleteOption;
