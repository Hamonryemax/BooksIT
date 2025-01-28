import PropTypes from 'prop-types';

import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { id, title, author, price, coverImage } = book;

    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover" />
            </div>
            <div className="book-details">
                <a href="#" className="book-title">{title}</a>
                <div className="book-author">{author}</div>
                <div className="book-price">{price}</div>
                <button
                    onClick={() => onAddedToCart(id)}
                    className="btn btn-info add-to-cart">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

BookListItem.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        coverImage: PropTypes.string
    }).isRequired,
    onAddedToCart: PropTypes.func.isRequired
};

export default BookListItem;
