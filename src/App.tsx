import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profiler} from "./components/Profiler/Profiler";
import {Dialogs} from "./components/Dilogs/Dilogs";
import {BrowserRouter, Route} from "react-router-dom";
import {State} from "./components/Redux/State";

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


type Props = {
    state: State
}

function App(props: Props) {
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

                    <Route path='/dialogs' render={() => <Dialogs state={props.state}/>}/>
                    <Route path='/profile' render={() => <Profiler state={props.state}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;