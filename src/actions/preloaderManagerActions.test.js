import {
  toggleCurrrentLocationPreloader,
  CURRENT_LOCATION_IS_LOADING
} from './preloaderManagerActions';

describe('Preloader actions', () => {
  it('Running action should return object of CURRENT_LOCATION_IS_LOADING action', () => {
    const expectResult = {
      type: CURRENT_LOCATION_IS_LOADING,
      isLoading: true
    };
    expect(toggleCurrrentLocationPreloader(true)).toEqual(expectResult);
  });
});
