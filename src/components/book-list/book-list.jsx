import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { booksLoaded, booksRequested, booksError, bookAddedToCart } from "../../reducers/books-slice.js";
import BookListItem from "../book-list-item/book-list-item.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorIndicator from "../error-indicator/error-indicator.jsx";
import BookstoreService from "../../services/bookstore-service";
import PropTypes from 'prop-types';

import "./book-list.css";


const BookList = ({ books, onAddedToCart }) => {
    return (
            <ul className="book-list">
                {books.length ? (
                    books.map((book) => (
                        <li className="book-item"
                            key={book.id}>
                            <BookListItem
                                book={book}
                                onAddedToCart={() => onAddedToCart(book)}
                            />
                        </li>
                    ))
                ) : (
                    <div>No books available</div>
                )}
            </ul>
    );
};

BookList.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        })
    ).isRequired
};

const bookstoreService = new BookstoreService();

const useBooks = () => {
    const dispatch = useDispatch();
    const { loading, error, books } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(booksRequested());

        bookstoreService.getBooks()
            .then((data) => dispatch(booksLoaded(data)))
            .catch((error) => dispatch(booksError(error.message || 'Unknown error occurred')));
    }, [dispatch]);

    return { loading, error, books };
};

const BookListContainer = () => {
    const dispatch = useDispatch();
    const { loading, error, books } = useBooks();

    const handleAddToCart = (book) => {
        dispatch(bookAddedToCart(book));
    };

    if (loading) return <Spinner />;
    if (error) return <ErrorIndicator message={error} />;
    return <BookList books={books} onAddedToCart={handleAddToCart} />;
};




export default React.memo(BookListContainer);
