import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '/src/actions/books-actions.js'
import { setCurrentPage } from '../../reducers/books-slice.js'

import './pagination.css';

const Pagination = ({ query }) => {
    const dispatch = useDispatch();
    const { totalBooks } = useSelector((state) => state.books);

    const booksPerPage = 9;
    const totalPage = Math.ceil(totalBooks / booksPerPage);

    const handlePageChange= (page) => {
        dispatch(setCurrentPage(page));
        dispatch(fetchBooks(query, page));
    }

    return (
        <div className="pagination">
            {Array.from({ length: totalPage }).map((_, i) => (
                <button
                    className="btn"
                    key={i}
                    onClick={() => handlePageChange(i + 1)}>
                    {i + 1}
                </button>
            ))}
        </div>
    )
};

export default Pagination;