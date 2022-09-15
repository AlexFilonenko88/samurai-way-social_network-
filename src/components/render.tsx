import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import {addPost, state, State} from "./Redux/State";
import App from "../App";



export const renderTree = (state: State) => {
    ReactDOM.render(<App state={state} addPost={addPost} />,  document.getElementById('root'));
}

//renderTree(state);