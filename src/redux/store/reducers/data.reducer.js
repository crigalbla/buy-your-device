import * as actionType from '../../actions/data.action';

const Data = (state = {}, action) => {
    switch (action.type) {
    case actionType.SUCCESS_GET_DATA:
        return {
            ...state,
            data: action.value,
            error: false,
        };
    case actionType.ERROR_GET_DATA:
        return {
            ...state,
            error: action.value,
        };
    default:
        return state;
    }
};

export default Data;
