import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "/src/actions/books-actions.js";
import { setCurrentPage } from "../../reducers/books-slice.js";
import './search.css';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(setCurrentPage(1));
        dispatch(fetchBooks(searchQuery, 1));
    };

    return (
        <form onSubmit={handleSearchSubmit} className="search-form">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for books..."
                className="search-input"
            />
            <button type="submit" className="search-btn">Go</button>
        </form>
    );
}

export default Search;
