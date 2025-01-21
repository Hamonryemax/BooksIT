import PropTypes from 'prop-types';

import './book-list-item.css';

const BookListItem = ({ book }) => {
    const { title, author } = book;

    return (
        <>
            <span>{title}</span>
            <span>{author}</span>
        </>
    );
};

BookListItem.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }).isRequired
};

export default BookListItem;
