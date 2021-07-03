import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetData } from '../../redux/actions/data.action';

import Modal from '../modal';
import Item from '../item';

import './listItem.scss';

const ListItem = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Data);
    const search = useSelector((state) => state.Search);
    const [isLoading, setIsLoading] = useState(true);

    const thereAreData = data && data.data && data.data.length;
    const searchReady = search && search.searchBy;

    const itemContains = (item) => {
        if (searchReady) {
            const searchLower = search.searchBy.toLowerCase();
            if (item.id.toLowerCase().includes(searchLower)
                || item.model.toLowerCase().includes(searchLower)
                || item.brand.toLowerCase().includes(searchLower)
                || item.price.includes(searchLower)) return true;
        } else {
            return true;
        }

        return false;
    };

    useEffect(() => {
        dispatch(startGetData({ method: 'get', path: '/product' }));
    }, []);

    useEffect(() => {
        if (thereAreData || (data && data.error)) {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [data]);

    return (
        <div>
            {isLoading
                ? <div className="h1">Cargando...</div>
                : (!data || !data.data) && <div className="home-div__notData">No hay datos</div>}
            {data.error && <Modal show title="Error" text={data.error} />}
            <div className="container">
                <div className="row">
                    {thereAreData && data.data
                        .filter((item) => itemContains(item) && item)
                        .map((item) => (
                            <div key={item.id} className="homde-div__item col-md-3">
                                <Item item={item} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ListItem;
