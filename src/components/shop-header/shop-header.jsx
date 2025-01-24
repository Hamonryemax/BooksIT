import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header">
            <Link to="/" className="logo">BooksIT</Link>
            <Link to="/cart" className="shopping-cart">
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                <span className="cart-info">{numItems} items</span>
                <span className="cart-total">${total.toFixed(2)}</span>
            </Link>
        </header>
    );
};

ShopHeader.propTypes = {
    numItems: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default React.memo(ShopHeader);
