import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './reducers/books-slice.js';

const store = configureStore({
    reducer: {
        books: booksReducer,
    },
    devTools: import.meta.env.MODE !== 'production',
});

export default store;
