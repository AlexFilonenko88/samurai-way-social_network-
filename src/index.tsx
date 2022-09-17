import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, State, subscribe, updateNewPostText} from "./components/Redux/State";
import {state} from './components/Redux/State'

export const renderTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,  document.getElementById('root'));
}

subscribe(renderTree);

// renderTree(state);
