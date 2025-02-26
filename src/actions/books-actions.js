import axios from "axios";
import { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure, setSelectedBook } from "../reducers/books-slice.js";

const fetchBooks = (query, page = 1) => async (dispatch) => {
    dispatch(fetchBooksStart());
    try {
        const response = await axios.get(`https://api.itbook.store/1.0/search/${query}/${page}`);

        const books = response.data.books.map((book) => ({
            id: book.isbn13,
            title: book.title || "Untitled",
            subtitle: book.subtitle || '',
            authors: book.authors || "Unknown author",
            isbn13: book.isbn13 || `isbn-${page}`,
            price: book.price || "N/A",
            image: book.image,
            publisher: book.publisher || "",
            pages: book.pages || "",
            year: book.year,
            rating: book.rating,
            desc: book.desc
        }));

        const totalBooks = parseInt(response.data.total, 10);

        dispatch(fetchBooksSuccess({ books, totalBooks }));
    } catch (error) {
        dispatch(fetchBooksFailure(error.message));
    }
};

const fetchBookDetails = (isbn13) => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.itbook.store/1.0/books/${isbn13}`);
        dispatch(setSelectedBook(response.data));
    } catch (error) {
        console.error("Error fetching book details:", error);
    }
};

export {
    fetchBooks,
    fetchBookDetails
}

