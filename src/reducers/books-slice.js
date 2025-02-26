import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0,
    currentPage: 1,
    totalBooks: 0,
    currentQuery: 'javaScript',
    selectedBook: null
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        bookAddedToCart: (state, action) => {
            const bookId = action.payload.id;
            const bookPrice = parseFloat(action.payload.price.replace("$", "")) || 0;
            const existingBook = state.cartItems.find(item => item.id === bookId);

            if (existingBook) {
                existingBook.count++;
                existingBook.total = parseFloat((existingBook.total + bookPrice).toFixed(2));
            } else {
                state.cartItems.push({
                    ...action.payload,
                    count: 1,
                    total: parseFloat(bookPrice.toFixed(2))
                });
            }

            state.orderTotal = parseFloat(
                state.cartItems.reduce((sum, item) => sum + item.total, 0).toFixed(2)
            );
        },
        bookIncreased: (state, action) => {
            const item = state.cartItems.find(book => book.id === action.payload);
            if (item) {
                const price = parseFloat(item.price.replace("$", "")) || 0;
                item.count++;
                item.total = parseFloat((item.total + price).toFixed(2));
                state.orderTotal = parseFloat((state.orderTotal + price).toFixed(2));
            }
        },
        bookDecreased: (state, action) => {
            const item = state.cartItems.find(book => book.id === action.payload);
            if (item) {
                const price = parseFloat(item.price.replace("$", "")) || 0;
                item.count--;
                item.total = parseFloat((item.total - price).toFixed(2));
                state.orderTotal = parseFloat((state.orderTotal - price).toFixed(2));

                if (item.count === 0) {
                    state.cartItems = state.cartItems.filter(book => book.id !== action.payload);
                }
            }
        },
        bookDeleted: (state, action) => {
            const itemIndex = state.cartItems.findIndex(book => book.id === action.payload);
            if (itemIndex !== -1) {
                state.orderTotal = parseFloat((state.orderTotal - state.cartItems[itemIndex].total).toFixed(2));
                state.cartItems.splice(itemIndex, 1);
            }
        },
        fetchBooksStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchBooksSuccess(state, action) {
            state.loading = false;
            state.books = action.payload.books.slice(0, 9);
            state.totalBooks = action.payload.totalBooks;
        },
        fetchBooksFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setCurrentQuery(state, action) {
            state.currentQuery = action.payload;
        },
        closeBookModal(state) {
            state.selectedBook = null;
        },
        setSelectedBook: (state, action) => {
            state.selectedBook = action.payload;
        },
    },
});

export const {
    bookAddedToCart,
    bookIncreased,
    bookDecreased,
    bookDeleted,
    fetchBooksStart,
    fetchBooksSuccess,
    fetchBooksFailure,
    setCurrentPage,
    setCurrentQuery,
    closeBookModal,
    setSelectedBook
} = booksSlice.actions;

export default booksSlice.reducer;
