import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app/app.jsx";
import ErrorBoundary from "./components/error-boundary/error-boundary.jsx";

import store from "./store.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
        <Provider store={store}>
            <ErrorBoundary>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
            </ErrorBoundary>
        </Provider>
);
