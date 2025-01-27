import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import './shopping-cart-table.css';

const ShoppingCartTable = () => {
    const dispatch = useDispatch();

    const { cartItems, orderTotal } = useSelector((state) => state.books);

    const handleIncrease = (id) => {
        console.log(`Increase item with id: ${id}`);
    };

    const handleDecrease = (id) => {
        console.log(`Decrease item with id: ${id}`);
    };

    const handleDelete = (id) => {
        console.log(`Delete item with id: ${id}`);
    };

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item, idx) => (
                        <tr key={item.id}>
                            <td>{idx + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.count}</td>
                            <td>${item.total}</td>
                            <td>
                                <button
                                    onClick={() => handleIncrease(item.id)}
                                    className="btn btn-outline-success"
                                >
                                    <FontAwesomeIcon icon={faPlusCircle} />
                                </button>
                                <button
                                    onClick={() => handleDecrease(item.id)}
                                    className="btn btn-outline-warning"
                                >
                                    <FontAwesomeIcon icon={faMinusCircle} />
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="btn btn-outline-danger"
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            <div className="total">Total: ${orderTotal}</div>
        </div>
    );
};

export default ShoppingCartTable;
