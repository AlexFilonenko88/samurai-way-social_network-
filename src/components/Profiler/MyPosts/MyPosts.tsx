import React from "react";
import "./MyPosts.module.css";
// @ts-ignore
import P from "./MyPosts.module.css";
import {Post} from "./Post/Posts";

export const MyPosts = () => {
    return (
        <div className={P.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={P.item}>
                <Post message='Hi, how are you?'/>
                <Post message="Its my first post"/>
            </div>
        </div>
    )
}