import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./components/Redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,

        document.getElementById('root'));
}

store.subscribe(renderTree);

renderTree();

// <App /> // store={store}