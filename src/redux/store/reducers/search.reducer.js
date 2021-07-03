import * as actionType from '../../actions/search.action';

const Search = (state = {}, action) => {
    switch (action.type) {
    case actionType.SEARCH_CHANGE:
        return {
            ...state,
            searchBy: action.value,
        };
    default:
        return state;
    }
};

export default Search;
