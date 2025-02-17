import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../reducers/books-slice.js'

import './pagination.css';

const Pagination = () => {
    const dispatch = useDispatch();
    const { totalBooks, currentPage } = useSelector((state) => state.books);

    const booksPerPage = 10;
    const totalPages = Math.ceil(totalBooks / booksPerPage);
    const maxVisiblePages = 10;

    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page));
    }

    return (
            <div className="pagination">
                <button
                    className="btn"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}>
                    {`<`}
                </button>
                {Array.from({length: endPage - startPage + 1}).map((_, i) => (
                    <button
                        className={`btn ${currentPage === startPage + i ? 'active' : ''}`}
                        key={i}
                        onClick={() => {
                            handlePageChange(startPage + i)
                        }}
                        disabled={startPage + i === currentPage}>
                        {startPage + i}
                    </button>
                ))}
                <button
                    className="btn"
                    onClick={() => {
                        handlePageChange(currentPage + 1)
                    }}
                    disabled={currentPage === totalPages}>
                    {`>`}
                </button>
            </div>
    )
};

export default Pagination;