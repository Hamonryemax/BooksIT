import PropTypes from 'prop-types';

import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { id, title, price, image } = book;

    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={image} alt="cover" />
            </div>
            <div className="book-details">
                <a href="#" className="book-title">{title}</a>
                <div className="container-button-price">
                    <div className="book-price">{price}</div>
                    <button
                        onClick={() => onAddedToCart(id)}
                        className="btn-info add-to-cart button-add-to-cart">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

BookListItem.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string
    }).isRequired,
    onAddedToCart: PropTypes.func.isRequired
};

export default BookListItem;
