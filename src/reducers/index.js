import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [
        {
            id: 1,
            title: 'Prodiction-Ready Microservices',
            author: 'Susan J. Fowler' },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard' }
    ]
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