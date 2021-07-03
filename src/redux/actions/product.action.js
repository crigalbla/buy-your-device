export const START_GET_PRODUCT = 'START_GET_PRODUCT';
export const SUCCESS_GET_PRODUCT = 'SUCCESS_GET_PRODUCT';

export const START_ADD_PRODUCT = 'START_ADD_PRODUCT';
export const SUCCESS_ADD_PRODUCT = 'SUCCESS_ADD_PRODUCT';
export const READY_TO_ADD_MORE = 'READY_TO_ADD_MORE';

export const ERROR_PRODUCT = 'ERROR_PRODUCT';
export const EMPTY_PRODUCT = 'EMPTY_PRODUCT';

export const startGetProduct = (payload) => ({
    type: START_GET_PRODUCT,
    ...payload,
});
export const successGetProduct = (payload) => ({
    type: SUCCESS_GET_PRODUCT,
    ...payload,
});

export const startAddProduct = (payload) => ({
    type: START_ADD_PRODUCT,
    ...payload,
});
export const successAddProduct = (payload) => ({
    type: SUCCESS_ADD_PRODUCT,
    ...payload,
});
