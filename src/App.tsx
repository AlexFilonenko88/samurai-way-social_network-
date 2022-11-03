import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profiler} from "./components/Profiler/Profiler";
import {Dialogs} from "./components/Dilogs/Dilogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, store, StoreType} from "./components/Redux/store";
import {AppStoreType} from "./components/Redux/redux-store";
import {DialogsContainer} from "./components/Dilogs/DilogsContainer";
import {MyPostsContainer} from "./components/Profiler/MyPosts/MyPostsContainer";

type Props = {
  //  store: AppStoreType
}

function App(props: Props) {
    //const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>

                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route
                        path='/dialogs'
                        render={() => <DialogsContainer />}/>

                    <Route path='/profile'
                           render={() =>
                               <Profiler
                                //   store={props.store}
                                   // profilePage={state.profilePage}
                                   //dispatch={props.store.dispatch.bind(props.store)}
                               />}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;