import React from 'react';

import { Searcher, ListItem } from '../../components';

import './home.scss';

const Home = () => (
    <div className="home-div__main">
        <Searcher />
        <ListItem />
    </div>
);

export default Home;
