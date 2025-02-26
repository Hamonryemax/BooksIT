import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchBookDetails } from "../../actions/books-actions.js";
import "./book-list-item.css";

const BookListItem = ({ book, onAddedToCart }) => {
    const dispatch = useDispatch();

    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img
                    src={book.image}
                    alt="cover"
                    className="book-img"
                    onClick={() => dispatch(fetchBookDetails(book.isbn13))}
                />
            </div>
            <div className="book-details">
                <a
                    href="#"
                    className="book-title"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(fetchBookDetails(book.isbn13));
                    }}
                >
                    {book.title}
                </a>
                <div className="container-button-price">
                    <div className="book-price">{book.price}</div>
                    <button
                        onClick={() => onAddedToCart(book.id)}
                        className="btn-info add-to-cart button-add-to-cart"
                    >
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
        image: PropTypes.string,
        isbn13: PropTypes.string.isRequired,
    }).isRequired,
    onAddedToCart: PropTypes.func.isRequired,
};

export default BookListItem;
