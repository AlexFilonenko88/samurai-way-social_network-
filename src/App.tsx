import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profiler/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dilogs/DilogsContainer";

type Props = {
  //  store: AppStoreType
}

function App(props: Props) {
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
                               <Profile
                               />}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;