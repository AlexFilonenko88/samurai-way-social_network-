import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profiler} from "./components/Profiler/Profiler";
import {Dialogs} from "./components/Dilogs/Dilogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, State, updateNewPostText} from "./components/Redux/State";

// type PPP = {
//     newPostText: string
// }

type Props = {
    state: State
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
    // profilePage: Object<PPP>
}

function App(props: Props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>

                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state}/>}/>
                    <Route path='/profile'
                           render={() =>
                               <Profiler
                                   profilePage={props.state.profilePage}
                                   addPost={props.addPost}
                                   updateNewPostText={props.updateNewPostText}
                               />}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

type MessageType = {
    message: string
    // posts: Array<PostType>
    addPostCallback: (message: string | null) => void
}

export default App;