import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
    loading: true,
    error: null
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        booksRequested: (state) =>{
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
        }
    },
});

export const { booksRequested ,booksLoaded, booksError } = booksSlice.actions;
export default booksSlice.reducer;