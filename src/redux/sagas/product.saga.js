import { put, call, takeLatest } from 'redux-saga/effects';

import {
    START_GET_PRODUCT,
    SUCCESS_GET_PRODUCT,
    ERROR_PRODUCT,
    START_ADD_PRODUCT,
    SUCCESS_ADD_PRODUCT,
} from '../actions/product.action';
import apiCall from '../api';

function* get(payload) {
    try {
        const results = yield call(apiCall, payload.method, `${process.env.REACT_APP_API}${payload.path}`);
        yield put({ type: SUCCESS_GET_PRODUCT, value: results });
    } catch (err) {
        yield put({ type: ERROR_PRODUCT, value: '¡Ha habido un error al encontrar el producto!' });
    }
}

function* add(payload) {
    try {
        yield call(apiCall, payload.method, `${process.env.REACT_APP_API}${payload.path}`, payload.data);
        yield put({ type: SUCCESS_ADD_PRODUCT, value: '¡El producto se ha añadido al carrito!' });
    } catch (err) {
        yield put({ type: ERROR_PRODUCT, value: '¡Ha habido un error al añadir el producto al carrito!' });
    }
}

export function* getProduct() {
    yield takeLatest(START_GET_PRODUCT, get);
}

export function* addProduct() {
    yield takeLatest(START_ADD_PRODUCT, add);
}
