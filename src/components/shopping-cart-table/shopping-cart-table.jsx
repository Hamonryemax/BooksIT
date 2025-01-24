import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import './shopping-cart-table.css';

const ShoppingCartTable = () => {
    const items = [
        { id: 1, title: 'Item 1', count: 2, totalPrice: 30 },
        { id: 2, title: 'Item 2', count: 1, totalPrice: 15 },
        { id: 3, title: 'Item 3', count: 5, totalPrice: 50 },
        { id: 4, title: 'Item 4', count: 5, totalPrice: 50 },
        { id: 5, title: 'Item 5', count: 5, totalPrice: 50 },
    ];

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
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
                {items.map((item, idx) => (
                    <tr key={item.id}>
                        <td>{idx + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.count}</td>
                        <td>${item.totalPrice.toFixed(2)}</td>
                        <td>
                            <button className="btn btn-outline-danger">
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                            <button className="btn btn-outline-success">
                                <FontAwesomeIcon icon={faPlusCircle}/>
                            </button>
                            <button className="btn btn-outline-warning">
                                <FontAwesomeIcon icon={faMinusCircle}/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="total">
                Total: $210
            </div>
        </div>
    );
};

export default ShoppingCartTable;
