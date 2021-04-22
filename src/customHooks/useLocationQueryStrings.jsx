import { useLocation } from 'react-router-dom';
import { groupQueryString, transformSpaces } from '../common/helpers';

const useLocationQueryStrings = () => {
  const { search } = useLocation();

  const groupedQueryStrings = groupQueryString(search);
  const cityName = transformSpaces(groupedQueryStrings) || '';
  const cityId = groupedQueryStrings.id || '';

  return { cityId, cityName };
};

export default useLocationQueryStrings;
