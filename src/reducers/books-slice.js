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
        bookAddedToCart: (state, action) => {
            const bookId = action.payload.id;
            const bookPrice = parseFloat(action.payload.price.replace("$", "")) || 0;
            const existingBook = state.cartItems.find(item => item.id === bookId);

            if (existingBook) {
                existingBook.count++;
                existingBook.total = parseFloat((existingBook.total + bookPrice).toFixed(2));
            } else {
                state.cartItems.push({
                    ...action.payload,
                    count: 1,
                    total: parseFloat(bookPrice.toFixed(2))
                });
            }

            state.orderTotal = parseFloat(
                state.cartItems.reduce((sum, item) => sum + item.total, 0).toFixed(2)
            );
        },
        bookIncreased: (state, action) => {
            const item = state.cartItems.find(book => book.id === action.payload);
            if (item) {
                const price = parseFloat(item.price.replace("$", "")) || 0;
                item.count++;
                item.total = parseFloat((item.total + price).toFixed(2));
                state.orderTotal = parseFloat((state.orderTotal + price).toFixed(2));
            }
        },
        bookDecreased: (state, action) => {
            const item = state.cartItems.find(book => book.id === action.payload);
            if (item && item.count > 0) {
                const price = parseFloat(item.price.replace("$", "")) || 0;
                item.count--;
                item.total = parseFloat((item.total - price).toFixed(2));
                state.orderTotal = parseFloat((state.orderTotal - price).toFixed(2));

                if (item.count === 0) {
                    const itemIndex = state.cartItems.findIndex(book => book.id === action.payload);
                    state.orderTotal = parseFloat((state.orderTotal - state.cartItems[itemIndex].total).toFixed(2));
                    state.cartItems.splice(itemIndex, 1);
                }
            }
        },
        bookDeleted: (state, action) => {
            const itemIndex = state.cartItems.findIndex(book => book.id === action.payload);
            if (itemIndex !== -1) {
                state.orderTotal = parseFloat((state.orderTotal - state.cartItems[itemIndex].total).toFixed(2));
                state.cartItems.splice(itemIndex, 1);
            }
        },
        fetchBooksStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchBooksSuccess(state, action) {
            state.loading = false;
            state.books = action.payload;
        },
        fetchBooksFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    bookAddedToCart,
    bookIncreased,
    bookDecreased,
    bookDeleted,
    fetchBooksStart,
    fetchBooksSuccess,
    fetchBooksFailure
} = booksSlice.actions;

export default booksSlice.reducer;
