/* eslint-disable no-return-assign */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import CartItem from '../cartItem';

import mobileLogo from '../../images/mobile-header.png';
import shoppingCartIcon from '../../images/shopping-cart.png';

import './header.scss';

const Header = () => {
    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();
    const shoppingCart = useSelector((state) => state.ShoppingCart);
    const [localShoppingCart, setLocalShoppingCart] = useState([]);

    const haveItemsInShoppingCart = localShoppingCart && localShoppingCart.length > 0;

    const countShoppingCart = () => {
        let result = 0;
        localShoppingCart.forEach((element) => {
            result += element.count;
        });

        return result;
    };

    const renderLocations = () => {
        const locationSplited = location.pathname.split('/')
            .filter((loc) => loc && loc !== id);

        const isTheLastSplit = (idx) => idx + 1 === locationSplited.length;

        const onClickBreadCrumb = (loc, idx) => {
            if (isTheLastSplit(idx)) {
                return null;
            }

            let toPush = '/';
            for (let j = 0; j < locationSplited.length; j += 1) {
                toPush += `${locationSplited[j]}/`;
                if (locationSplited[j] === loc) {
                    toPush = toPush.substr(0, toPush.length - 1);
                    break;
                }
            }

            return history.push(toPush);
        };

        return (
            <>
                <button className="btn btn-link" onClick={() => history.push('/home')} type="button">Home</button>
                {locationSplited.map((loc, idx) => (
                    <div key={`div-${idx}`}>
                        <span className="mx-1">{'>'}</span>
                        <button
                            className={`btn ${!isTheLastSplit(idx) ? 'btn-link' : 'button__noClick'}`}
                            onClick={() => onClickBreadCrumb(loc, idx)}
                            type="button">
                            {loc}
                        </button>
                    </div>
                ))}
            </>
        );
    };

    useEffect(() => {
        const values = Object.values(shoppingCart);
        setLocalShoppingCart(values);
    }, [shoppingCart]);

    return (
        <div className="header-div__main">
            {location && location.pathname !== '/home'
                && (
                    <div className="hedaer-breadcrumb__main">
                        <div className="breadcrumb">
                            {renderLocations()}
                        </div>
                    </div>
                )}
            <img className="header-img__mobile" src={mobileLogo} alt="log movil" />
            <button type="button" className="header-button__welcome" onClick={() => history.push('/home')}>
                Compra tu movil
            </button>
            <Dropdown className="header-dropdown__main">
                <Dropdown.Toggle>
                    <img className="header-img__shopping" src={shoppingCartIcon} alt="shopping" />
                    {haveItemsInShoppingCart && <div className="header-items__icon">{countShoppingCart()}</div>}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {haveItemsInShoppingCart
                        ? localShoppingCart.map((item, idx) => (
                            <Dropdown.Item key={`dropdown-${idx}`} className="header-dropdown__empty">
                                <CartItem key={idx} item={item} />
                            </Dropdown.Item>
                        ))
                        : (
                            <Dropdown.Item className="header-dropdown__empty">
                                Tu cesta está vacía
                            </Dropdown.Item>
                        )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Header;
