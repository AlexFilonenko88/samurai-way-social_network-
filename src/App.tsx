import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profiler} from "./components/Profiler/Profiler";
import {Dialogs} from "./components/Dilogs/Dilogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, addPostAC, store, StoreType} from "./components/Redux/State";

type Props = {

    store: StoreType

}

function App(props: Props) {
    const state= props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>

                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs
                        store={props.store}
                    />}/>

                    <Route path='/profile'
                           render={() =>
                               <Profiler
                                   profilePage={state.profilePage}
                                   dispatch={props.store.dispatch.bind(props.store)}
                               />}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}



export default App;