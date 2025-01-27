import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems:  [
        {
            id: 1,
            title: 'Book 1',
            count: 3,
            total: 150
        },
        {
            id: 2,
            title: 'Book 2',
            count: 2,
            total: 80
        },
    ],
    orderTotal: 230
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