import { useDispatch, useSelector } from "react-redux";
import { closeBookModal } from "../../reducers/books-slice.js";
import "./book-modal.css";

const BookModal = () => {
    const dispatch = useDispatch();
    const book = useSelector((state) => state.books.selectedBook);

    if (!book) return null;

    return (
        <div className="modal-overlay" onClick={() => dispatch(closeBookModal())}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => dispatch(closeBookModal())}>×</button>
                <h2>{book.title}</h2>
                <p><strong>Author:</strong> {book.authors || "Unknown"}</p>
                <p>{book.subtitle && <strong>Subtitle:</strong>} {book.subtitle}</p>
                <p>{book.desc && <strong>Description:</strong>} {book.desc}</p>
                <p><strong>Price:</strong> {book.price}</p>
                <img src={book.image} alt={book.title} className="modal-image"/>
                <div className="book-info">
                    <p>{book.pages && <strong>Pages:</strong>} {book.pages}</p>
                    <p>{book.year && <strong>Year:</strong>} {book.year}</p>
                </div>
            </div>
        </div>
    );
};


export default BookModal;
