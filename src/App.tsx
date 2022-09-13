import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profiler} from "./components/Profiler/Profiler";
import {Dialogs} from "./components/Dilogs/Dilogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, State} from "./components/Redux/State";

type Props = {
    state: State
    addPost: (postMessage: string) => void
}

function App(props: Props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>

                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state}/>}/>
                    <Route path='/profile' render={() => <Profiler state={props.state} addPost={props.addPost}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

type MessageType = {
    message: string
    // posts: Array<PostType>
    addPostCallback: (message:string | null) => void
}

export default App;