import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./components/Redux/redux-store";

export const renderTree = () => {
    ReactDOM.render(<App store={store}/>,

        document.getElementById('root'));
}

store.subscribe(renderTree);

renderTree();
