import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import searchIcon from '../../images/search-icon.png';
import { SEARCH_CHANGE } from '../../redux/actions/search.action';

import './searcher.scss';

const Searcher = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const search = useSelector((state) => state.Search);

    const inputOnChange = () => {
        if (inputRef && inputRef.current && typeof inputRef.current.value === 'string') {
            dispatch({ type: SEARCH_CHANGE, value: inputRef.current.value });
        }
    };

    return (
        <div className="container mb-3">
            <div className="row height d-flex justify-content-end">
                <div className="col-md-5">
                    <div className="search">
                        <img className="search-icon" src={searchIcon} alt="s" />
                        <input
                            className="form-control"
                            ref={inputRef}
                            type="text"
                            placeholder="Ejemplos: alcatel, z6..."
                            value={search.searchBy || ''}
                            onChange={inputOnChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searcher;
