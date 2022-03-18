import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getSearchLocations } from '../../api';
import { url } from '../../constants';
import Autocomplete from '../Autocomplete/Autocomplete';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState();
  const [display, setDisplay] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (options) {
      setDisplay(true);
    }
  }, [options]);

  const updateOptions = useCallback(async () => {
    if (value.length > 2) {
      const locations = await getSearchLocations(url, value);
      setOptions(locations);
    }
  }, [value]);

  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleBlur = () => setDisplay(false);
  const handleFocus = () => !!value && setDisplay(true);
  const handleSubmit = event => {
    event.preventDefault();
    inputRef.current.focus();
    updateOptions();
  };
  const handleOptionSelect = () => {
    setDisplay(false);
  };

  useEffect(() => {
    const searchDelayTimeoutId = setTimeout(() => {
      updateOptions();
    }, 500);

    return () => clearTimeout(searchDelayTimeoutId);
  }, [value, updateOptions]);

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        placeholder="location name"
        value={value}
        onInput={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        ref={inputRef}
      />
      <button type="submit">Search</button>
      <Autocomplete display={display} options={options} onOptionSelect={handleOptionSelect} />
    </form>
  );
};

export default SearchInput;
