import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profiler} from "./components/Profiler/Profiler";
import {Dialogs} from "./components/Dilogs/Dilogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>

                <Navbar/>

                {/*<Profiler/>*/}
                <div className='app-wrapper-content'>
                    {/*отвечает за один компонент (название компонента)*/}
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profiler}/>
                    {/*<Dialogs/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;