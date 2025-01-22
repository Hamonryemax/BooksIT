import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

const rootReducer = combineReducers({
    books: booksReducer
});

export default rootReducer;
