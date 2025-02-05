import axios from "axios";
import { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } from "../reducers/books-slice.js";

export const fetchBooks = (query, page = 1) => async (dispatch) => {
    dispatch(fetchBooksStart());
    try {
        const response = await axios.get(`https://api.itbook.store/1.0/search/${query}/${page}`);

        const books = response.data.books.map((book) => ({
            id: book.isbn13,
            title: book.title || "Untitled",
            author: book.author || "Unknown author",
            isbn13: book.isbn13 || `isbn-${page}`,
            price: book.price || "N/A",
            image: book.image,
        }));

        const totalBooks = parseInt(response.data.total, 10);

        dispatch(fetchBooksSuccess({ books, totalBooks }));
    } catch (error) {
        dispatch(fetchBooksFailure(error.message));
    }
};

