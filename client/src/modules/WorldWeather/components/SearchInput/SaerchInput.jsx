import PropTypes from 'prop-types';
import { CustomInput } from '../CustomInput/';
import * as S from '../../../../app_data/styles_info/common_styles';

CustomInput.propTypes = {
  searchValue: PropTypes.string,
  onSearchClick: PropTypes.func
};

export function SearchInput(props) {
  return (
    <S.GridItem item xs={12} sm={6} md={3} padding="0 20px" marginLeft="auto">
      <CustomInput
        countries={props.countries}
        inputValue={props.searchValue}
        onSearchClick={props.onSearchClick}
        onSelectCountry={props.onSelectCountry}
      />
    </S.GridItem>
  );
}
