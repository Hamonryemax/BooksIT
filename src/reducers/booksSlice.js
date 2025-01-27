import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
    loading: true
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        booksLoaded: (state, action) => {
            state.books = action.payload;
            state.loading = false;
        },
    },
});

export const { booksLoaded } = booksSlice.actions;
export default booksSlice.reducer;