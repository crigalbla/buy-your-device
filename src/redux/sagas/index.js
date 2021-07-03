import { all } from 'redux-saga/effects';

import { getProduct, addProduct } from './product.saga';
import data from './data.saga';

export default function* rootSaga() {
    yield all([
        getProduct(),
        addProduct(),
        data(),
    ]);
}
