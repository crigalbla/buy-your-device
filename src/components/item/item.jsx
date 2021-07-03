import React from 'react';
import { useHistory } from 'react-router-dom';

import './item.scss';

const Item = ({ item }) => {
    const history = useHistory();

    return (
        <div className="item-div__main card">
            <img src={item.imgUrl} alt={`${item.brand}: ${item.model}`} />
            <div className="card-body">
                <h5>{`${item.brand}: ${item.model}`}</h5>
                {item.price
                    ? <h6>{`${item.price}€`}</h6>
                    : <h6>Precio no disponible</h6>}
                <button type="button" className="btn btn-outline-primary" onClick={() => history.push(`/product/${item.id}`)}>
                    Ver dispositivo
                </button>
            </div>
        </div>
    );
};

export default Item;
