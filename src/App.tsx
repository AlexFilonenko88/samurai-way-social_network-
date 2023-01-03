import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profiler/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dilogs/DilogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";
import axios from "axios";

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
            render={() => <DialogsContainer/>}/>

          <Route
            path='/profile'
            render={() => <Profile/>}
          />

          <Route
            path='/users'
            render={() => <UsersContainer/>}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;