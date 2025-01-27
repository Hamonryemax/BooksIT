import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { booksLoaded } from "../../reducers/booksSlice.js";
import BookListItem from "../book-list-item/book-list-item.jsx";
import BookstoreService from "../../services/bookstore-service";

import "./book-list.css";

const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books?.books || []);
    const loading = useSelector((state) => state.books?.loading);

    useEffect(() => {
        const bookstoreService = new BookstoreService();
        bookstoreService.getBooks()
            .then((data) => dispatch(booksLoaded(data)))
            .catch((error) => console.error("Failed to fetch books:", error));
    }, [dispatch]);

    if (loading) {
        return(
            <div>...loading</div>
        )
    }

    return (
        <ul className="book-list">
            {books.length > 0 ? (
                books.map((book) => (
                    <li key={book.id}>
                        <BookListItem book={book} />
                    </li>
                ))
            ) : (
                <div>No books available</div>
            )}
        </ul>
    );
};

export default React.memo(BookList);
