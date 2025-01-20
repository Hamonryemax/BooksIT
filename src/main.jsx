import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app/app.jsx";
import ErrorBoundary from "./components/error-boundary/error-boundary.jsx";
import BookstoreService from "./services/bookstore-service.js";
import { BookstoreServiceProvider } from "./components/bookstore-service-context/bookstore-service-context.jsx";

import store from "./store.js";

const bookstoreService = new BookstoreService();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
        <Provider store={store}>
            <ErrorBoundary>
                <BookstoreServiceProvider value={bookstoreService}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </BookstoreServiceProvider>
            </ErrorBoundary>
        </Provider>
);
