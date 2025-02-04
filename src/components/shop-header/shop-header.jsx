import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import './shop-header.css';

const ShopHeader = ({ numItems = 0, total = 0 }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Search query:', searchQuery);
    };

    return (
        <header className="shop-header">
            <Link to="/" className="logo">BooksIT</Link>
            <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for books..."
                    className="search-input"
                />
            </form>
            <Link to="/cart" className="shopping-cart">
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                <span className="cart-info">{numItems} items</span>
                <span className="cart-total">${total}</span>
            </Link>
        </header>
    );
};

ShopHeader.propTypes = {
    numItems: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default React.memo(ShopHeader);
