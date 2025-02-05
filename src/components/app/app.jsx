import { Route, Routes } from 'react-router-dom';
import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header/shop-header.jsx";

import './app.css';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={0} total={0} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </main>
    )
}

export default App;