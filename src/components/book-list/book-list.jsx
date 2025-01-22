import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { booksLoaded } from "../../reducers/booksSlice.js";
import BookListItem from "../book-list-item/book-list-item.jsx";
import BookstoreService from "../../services/bookstore-service";

import "./book-list.css";

const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books?.books || []);

    useEffect(() => {
        const bookstoreService = new BookstoreService();
        const booksData = bookstoreService.getBooks();

        dispatch(booksLoaded(booksData));
    }, [dispatch]);

    return (
        <ul>
            {books.length > 0 ? (
                books.map((book) => (
                    <li key={book.id}>
                        <BookListItem book={book} />
                    </li>
                ))
            ) : (
                <p>No books available</p>
            )}
        </ul>
    );
};

export default React.memo(BookList);
