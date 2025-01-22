import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/booksSlice.js';

const store = configureStore({
    reducer: {
        books: rootReducer,
    },
    devTools: import.meta.env.MODE !== 'production',
});

export default store;
