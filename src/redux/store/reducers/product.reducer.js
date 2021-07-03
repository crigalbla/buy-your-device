import * as actionType from '../../actions/product.action';

const Product = (state = {}, action) => {
    switch (action.type) {
    case actionType.SUCCESS_GET_PRODUCT:
        return {
            ...state,
            ...action.value,
            productAdded: false,
            error: false,
        };
    case actionType.SUCCESS_ADD_PRODUCT:
        return {
            ...state,
            productAdded: action.value,
            error: false,
        };
    case actionType.READY_TO_ADD_MORE:
        return {
            ...state,
            productAdded: false,
        };
    case actionType.ERROR_PRODUCT:
        return {
            error: action.value,
        };
    case actionType.EMPTY_PRODUCT:
        return {};
    default:
        return state;
    }
};

export default Product;
