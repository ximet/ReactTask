import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './AutocompleteOption.module.scss';

const AutocompleteOption = ({ location, selected }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${location.id}`);
    selected();
    // setInputValue('');
  };

  return (
    <div className={classes.option} onClick={handleClick}>
      <span>{`${location.name}, ${location.country}`}</span>
    </div>
  );
};

export default AutocompleteOption;
