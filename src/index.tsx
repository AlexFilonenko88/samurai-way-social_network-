import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, State} from "./components/Redux/State";
import {state} from './components/Redux/State'
import {renderTree} from "./components/render";


renderTree(state);