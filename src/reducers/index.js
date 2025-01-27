import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books-slice.js';

const rootReducer = combineReducers({
    books: booksReducer
});

export default rootReducer;
