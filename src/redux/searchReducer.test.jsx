import { searchReducer } from './searchReducer';
import { SEARCH_LOCATION } from './types';

const previousState = {searchParam: 'search'};

describe('search reducer', () => {
    it('should return the initial state', () => {
        expect(searchReducer(undefined, {})).toEqual({searchParam: ''});
    });

    it('should return the search param without previous state', () => {
        expect(searchReducer(undefined, {type: SEARCH_LOCATION, payload: 'search param'})).toEqual({searchParam: 'search param'});
    });

    it('should return the search param with previous state', () => {
        expect(searchReducer(previousState, {type: SEARCH_LOCATION, payload: 'search param'})).toEqual({'searchParam': 'search param'});
    });
});
