export const START_GET_DATA = 'START_GET_DATA';
export const SUCCESS_GET_DATA = 'SUCCESS_GET_DATA';
export const ERROR_GET_DATA = 'ERROR_GET_DATA';

export const startGetData = (payload) => ({
    type: START_GET_DATA,
    ...payload,
});

export const successGetData = (payload) => ({
    type: SUCCESS_GET_DATA,
    ...payload,
});
