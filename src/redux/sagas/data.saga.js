import { put, call, takeLatest } from 'redux-saga/effects';

import { START_GET_DATA, SUCCESS_GET_DATA, ERROR_GET_DATA } from '../actions/data.action';
import apiCall from '../api';

function* getData(payload) {
    try {
        const results = yield call(apiCall, payload.method, `${process.env.REACT_APP_API}${payload.path}`);
        yield put({ type: SUCCESS_GET_DATA, value: results });
    } catch (err) {
        yield put({ type: ERROR_GET_DATA, value: '¡Ha habido un error al solicitar los datos!' });
    }
}

export default function* data() {
    yield takeLatest(START_GET_DATA, getData);
}
