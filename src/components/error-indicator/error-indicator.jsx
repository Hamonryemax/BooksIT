import './error-indicator.css'

const ErrorIndicator = () => {
    return (
        <div className="container">
            <div className="error-indicator">
                <div className="error-book">
                    <div className="cover"></div>
                    <div className="pages"></div>
                </div>
                <p className="error-text">Oops! Something went wrong.</p>
            </div>
        </div>
    )
}

export default ErrorIndicator;