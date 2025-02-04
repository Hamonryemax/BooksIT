import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookAddedToCart } from "../../reducers/books-slice.js";
import { fetchBooks } from "../../actions/books-actions.js";
import BookListItem from "../book-list-item/book-list-item.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorIndicator from "../error-indicator/error-indicator.jsx";
import PropTypes from "prop-types";

import "./book-list.css";

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {books.length > 0 ? (
                books.map((book) => (
                    <li key={book.isbn13}>
                        <BookListItem
                            book={{
                                ...book,
                                title: book.title || "Untitled",
                                author: book.author || "Unknown",
                                price: book.price || 0,
                            }}
                            onAddedToCart={() => onAddedToCart(book)}
                        />
                    </li>

                ))
            ) : (
                <ErrorIndicator />
            )}
        </ul>
    );
};

BookListItem.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        isbn13: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};



const BookListContainer = () => {
    const dispatch = useDispatch();
    const { loading, error, books } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooks("javascript"));
    }, [dispatch]);

    const handleAddToCart = (book) => {
        dispatch(bookAddedToCart(book));
    };

    if (loading) return <Spinner />;
    if (error) return <ErrorIndicator message={error} />;
    return <BookList books={books} onAddedToCart={handleAddToCart} />;
};

export default React.memo(BookListContainer);
