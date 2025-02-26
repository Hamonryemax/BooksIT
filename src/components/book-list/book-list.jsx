import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookAddedToCart } from "../../reducers/books-slice.js";
import { fetchBooks } from "../../actions/books-actions.js";
import BookListItem from "../book-list-item/book-list-item.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorIndicator from "../error-indicator/error-indicator.jsx";
import Pagination from "../pagination/pagination.jsx";
import BookModal from "../book-modal/book-modal.jsx";
import "./book-list.css";

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {books.length > 0 ? (
                books.map((book) => (
                    <li key={book.id || book.isbn13}>
                        <BookListItem
                            book={book}
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

const BookListContainer = () => {
    const dispatch = useDispatch();
    const { loading, books, currentPage, currentQuery } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooks(currentQuery, currentPage));
    }, [dispatch, currentPage, currentQuery]);

    const handleAddToCart = (book) => {
        dispatch(bookAddedToCart(book));
    };

    if (loading) return (
        <>
            <Spinner />
            <Pagination />
        </>
    );

    return (
        <>
            <BookList books={books} onAddedToCart={handleAddToCart} />
            <Pagination />
            <BookModal />
        </>
    );
};

export default React.memo(BookListContainer);
