import React from 'react';
import { useHistory } from 'react-router-dom';

import './cartItem.scss';

const Searcher = ({ item }) => {
    const history = useHistory();

    return (
        <button type="button" className="cartItem-button__main" onClick={() => history.push(`/product/${item.data.id}`)}>
            <img src={item.data.imgUrl} alt="error-img" height={100} />
            <div className="ms-2">
                <strong>{`${item.data.brand}: ${item.data.model}`}</strong>
                <div>{`${item.data.price || '-'}€`}</div>
                <div>{`Unidades: ${item.count}`}</div>
            </div>
        </button>
    );
};

export default Searcher;
