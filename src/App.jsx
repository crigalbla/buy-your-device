import React from 'react';
import {
    BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import { Header } from './components';
import { Home, ProductDetails } from './views';

const App = () => {
    const renderWithHeader = (children) => (
        <>
            <Header />
            {children}
        </>
    );

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/product/:id">
                    {renderWithHeader(<ProductDetails />)}
                </Route>
                <Route path="/home">
                    {renderWithHeader(<Home />)}
                </Route>
                <Redirect from="*" to="/home" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
