import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../actions/books-actions.js";
import "./search.css";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            dispatch(fetchBooks(searchQuery)); // Запрос книг по поисковому запросу
        }
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
        </form>
    );
};

export default Search;
