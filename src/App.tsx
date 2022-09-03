import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profiler} from "./components/Profiler/Profiler";
import {Dialogs} from "./components/Dilogs/Dilogs";
import {BrowserRouter, Route} from "react-router-dom";

type Posts = {
    id: number
    message: string
    likesCount: number
}

type Dialogs = {
    id: number
    name: string
}

type Messsages = {
    id: number
    name: string
}

type StateType = {
    id: number
    message: string
    likesCount: number
}

type PostsType = {
    // id: number
    // message: string
    // likesCount: number
    posts: Array<Posts>
    dialogs: Array<Dialogs>
    messsages: Array<Messsages>
    state:  Array<StateType>
}

function App(props:PostsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>

                <Navbar/>

                {/*<Profiler/>*/}
                <div className='app-wrapper-content'>
                    {/*отвечает за один компонент (название компонента)*/}
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profiler}/>*/}
                    {/*<Dialogs/>*/}

                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>
                    <Route path='/profile' render={() => <Profiler posts={props.state.profilePage} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;