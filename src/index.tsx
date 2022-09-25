import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./components/Redux/State";


export const renderTree = (state) => {
    ReactDOM.render(<App
        state={state}
        dispatch={store.dispatch.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root'));
}

store.subscribe(onChange);

renderTree(store.getState());
