import axios from "axios";
import { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } from "../reducers/books-slice.js";

export const fetchBooks = (query) => async (dispatch) => {
    dispatch(fetchBooksStart());
    try {
        const allBooks = [];
        let page = 1;
        // let totalBooks = 0;

        do {
            const response = await axios.get(`https://api.itbook.store/1.0/search/${query}/${page}`);
            const books = response.data.books.map((book, index) => ({
                id: book.isbn13 || `${page}-${index}`,
                title: book.title || "Untitled",
                author: book.author || "Unknown author",
                isbn13: book.isbn13 || `isbn-${page}-${index}`,
                price: book.price || "N/A",
                image: book.image,
            }));
            // totalBooks = response.data.total;
            allBooks.push(...books);
            page++;
        } while (allBooks.length < 10);

        dispatch(fetchBooksSuccess(allBooks));
    } catch (error) {
        dispatch(fetchBooksFailure(error.message));
    }
};
