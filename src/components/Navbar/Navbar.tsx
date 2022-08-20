import React from "react";
import "./Navbar.module.css"
import N from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={N.nav}>
            <div className={N.item}>
                Profile
            </div>
            <div className={N.item}>
                Messages
            </div>
            <div className={N.item}>
                News
            </div>
            <div className={N.item}>
                Music
            </div>
            <div className={N.item}>
                Settings
            </div>
        </nav>
    )
}