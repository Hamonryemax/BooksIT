import { Route, Routes } from 'react-router-dom';
import { HomePage, CartPage } from "../pages";

import './app.css';

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/cart" element={<CartPage />} />
        </Routes>
    )
}

export default App;