import { combineReducers } from 'redux';

import Product from './product.reducer';
import Data from './data.reducer';
import Search from './search.reducer';
import ShoppingCart from './shoppingCart.reducer';

const reducers = combineReducers({
    Product,
    Data,
    Search,
    ShoppingCart,
});

export default reducers;
