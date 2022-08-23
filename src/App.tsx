import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profiler} from "./components/Profiler/Profiler";

function App() {
    return (
        <div className='app-wrapper'>
            <Header />

            <Navbar />

            <Profiler />
        </div>
    );
}

export default App;