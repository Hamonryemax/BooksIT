import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Search from '/src/components/search/search.jsx'

import './shop-header.css';

const ShopHeader = () => {
    const { orderTotal, cartItems } = useSelector((state) => state.books);
    const totalItemsCount = cartItems.reduce((acc, item) => acc + item.count, 0);

    return (
        <header className="shop-header">
            <Link to="/" className="logo">BooksIT</Link>
            <Search />
            <Link to="/cart" className="shopping-cart">
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                <span className="cart-info">{totalItemsCount} Books</span>
                <span className="cart-total">{orderTotal}$</span>
            </Link>
        </header>
    );
};

ShopHeader.propTypes = {
    numItems: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default React.memo(ShopHeader);
