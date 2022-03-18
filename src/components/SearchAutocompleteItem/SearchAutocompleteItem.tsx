import React from 'react';
import { useHistory } from 'react-router-dom';

import './SearchAutocompleteItem.scss';
import { LocationSearchItemInterface } from '../../interfaces/interfaces';

interface SearchAutocompleteItemProps {
  cityData: LocationSearchItemInterface;
  setInputValue: (newState: string) => void;
}

function SearchAutocompleteItem({ cityData, setInputValue } : SearchAutocompleteItemProps) {
  const history = useHistory();

  const handleClick = (): void => {
    history.push(`/${cityData.id}`);
    setInputValue('');
  };

  const handleKeyUp = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <li
      className="search__autocomplete-item"
      key={cityData.id}
      onClick={handleClick}
      onKeyDown={handleKeyUp}
      role="menuitem"
      tabIndex={0}
      data-id={cityData.id}
    >
      {`${cityData.name}, ${cityData.country}`}
    </li>
  );
}

export default SearchAutocompleteItem;
