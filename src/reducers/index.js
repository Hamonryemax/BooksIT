import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        booksLoaded: (state, action) => {
            state.books = action.payload;
        },
    },
});

export const { booksLoaded } = booksSlice.actions;
export default booksSlice.reducer;