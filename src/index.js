import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import storeFn from './redux/store';

import 'bootstrap/dist/css/bootstrap.css';

const store = storeFn();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
