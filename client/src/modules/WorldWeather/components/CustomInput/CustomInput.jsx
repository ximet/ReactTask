import PropTypes from 'prop-types';
import * as S from '../../style';
import { FormControl, Input } from '@mui/material';

export function CustomInput(props) {
  let buttonEnd = (
    <S.SearchButton onClick={props.buttonProps.onSearchClick}>
      {props.endButton.icon !== undefined ? props.endButton.icon : null}
      {props.endButton.text !== undefined ? props.endButton.text : null}
    </S.SearchButton>
  );

  return (
    <>
      <FormControl {...props.formControlProps}>
        <Input {...props.inputProps} endAdornment={buttonEnd} />
      </FormControl>
    </>
  );
}

CustomInput.propTypes = {
  endButton: PropTypes.object,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  buttonProps: PropTypes.object
};
