import React from "react";
// @ts-ignore
import N from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={N.nav}>
            <div className={N.item}>
                <NavLink to='/profile' activeClassName={N.active}>Profile</NavLink>
            </div>
            <div className={N.item}>
                <NavLink to='/dialogs' activeClassName={N.active}>Messages</NavLink>
            </div>
            <div className={N.item}>
                <a>News</a>
            </div>
            <div className={N.item}>
                <a>Music</a>
            </div>
            <div className={N.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}