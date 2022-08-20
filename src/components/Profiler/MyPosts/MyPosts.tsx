import React from "react";
import "./MyPosts.module.css";
import P from "./MyPosts.module.css";
import {Post} from "./Post/Posts";

export const MyPosts = () => {
    return (
        <>
            <div>
                New posts
            </div>
            <div className={P.item}>
                <Post message='Hi, how are you?'/>
                <Post message="Its my first post"/>
            </div>
        </>
    )
}