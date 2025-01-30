import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        booksRequested: (state) => {
            state.loading = true;
        },
        booksLoaded: (state, action) => {
            state.books = action.payload;
            state.loading = false;
        },
        booksError: (state, action) => {
            state.books = [];
            state.loading = false;
            state.error = action.payload;
        },
        bookAddedToCart: (state, action) => {
            const bookId = action.payload.id;
            const book = state.books.find((book) => book.id === bookId);
            if (!book) return;

            const existingBook = state.cartItems.find((item) => item.id === bookId);
            if (existingBook) {
                existingBook.count += 1;
                existingBook.total += book.price;
            } else {
                state.cartItems.push({
                    id: book.id,
                    title: book.title,
                    count: 1,
                    total: book.price
                });
            }
            state.orderTotal = state.cartItems.reduce((sum, item) => sum + item.total, 0);
        },
        bookIncreased: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item) {
                item.count += 1;
                item.total += item.total / (item.count - 1);
            }
            state.orderTotal = state.cartItems.reduce((sum, item) => sum + item.total, 0);
        },
        bookDecreased: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item && item.count > 1) {
                item.count -= 1;
                item.total -= item.total / (item.count + 1);
            }
            state.orderTotal = state.cartItems.reduce((sum, item) => sum + item.total, 0);
        },
        bookDeleted: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            state.orderTotal = state.cartItems.reduce((sum, item) => sum + item.total, 0);
        }
    },
});


export const {
    booksRequested,
    booksLoaded,
    booksError,
    bookAddedToCart,
    bookIncreased,
    bookDecreased,
    bookDeleted
} = booksSlice.actions;

export default booksSlice.reducer;
