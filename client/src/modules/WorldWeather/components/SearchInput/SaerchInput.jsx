import PropTypes from 'prop-types';
import { CustomInput } from '../CustomInput/';
import * as Individual_S from '../../style';
import * as S from '../../../../app_data/styles_info/common_styles';

SearchInput.propTypes = {
  searchValue: PropTypes.string,
  onSearchClick: PropTypes.func
};

export function SearchInput(props) {
  return (
    <S.GridItem item xs={12} sm={6} md={6} centering="true" padding="30px 0">
      <CustomInput
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          type: 'text',
          value: props.searchValue,
          placeholder: 'Search Weather...',
          onChange: (e) => props.changeSearchValue(e.target.value)
        }}
        buttonProps={{
          onSearchClick: props.onSearchClick
        }}
        endButton={{
          icon: <Individual_S.SearchIcon />
        }}
      />
    </S.GridItem>
  );
}
