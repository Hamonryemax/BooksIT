import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/index.js';

const store = configureStore({
    reducer,
    devTools: import.meta.env.MODE !== 'production',
});

export default store;