import PropTypes from 'prop-types';
import { Autocomplete, TextField } from '@mui/material';

export function CustomInput(props) {
  return (
    <>
      <Autocomplete
        filterOptions={x => x}
        value={props.inputValue}
        onChange={props.onSelectCountry}
        inputValue={props.inputValue}
        onInputChange={(event, newInputValue) => {
          props.onSearchClick(newInputValue);
        }}
        freeSolo
        id="search-weather"
        disableClearable
        options={
          props.countries.length
            ? props.countries.map(country => `${country.name},${country.country}`)
            : props.countries
        }
        renderInput={params => (
          <TextField
            {...params}
            label="Search weather"
            variant="standard"
            InputProps={{
              ...params.InputProps,
              type: 'search'
            }}
          />
        )}
      />
    </>
  );
}

CustomInput.propTypes = {
  countries: PropTypes.object,
  onSearchClick: PropTypes.func,
  onSelectCountry: PropTypes.func
};
