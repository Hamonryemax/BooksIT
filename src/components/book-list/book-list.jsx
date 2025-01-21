import React from "react";
import { useSelector } from "react-redux";
import BookListItem from "../book-list-item/book-list-item.jsx";

import "./book-list.css";

const BookList = () => {
    const books = useSelector((state) => state.books);

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
