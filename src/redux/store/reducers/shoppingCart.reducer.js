import * as actionTypeProduct from '../../actions/shoppingCart.action';

const ShoppingCart = (state = {}, action) => {
    switch (action.type) {
    case actionTypeProduct.SHOPPING_CART_ITEM_ADDED:
        return {
            ...state,
            [action.value.id]: state[action.value.id]
                ? { data: state[action.value.id].data, count: state[action.value.id].count + 1 }
                : { data: action.value, count: 1 },
        };
    default:
        return state;
    }
};

export default ShoppingCart;
