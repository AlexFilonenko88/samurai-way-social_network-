import React from "react";
import P from "./Profiler.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilerInfo} from './ProfilerInfo/ProfilerInfo'
import {addPost, State} from "../Redux/State";

type Props = {
    profilePage: any
    addPost: (postMessage: string) => void
    updateNewPostText:(newText: string)=> void
}

 export const Profiler = (props: Props) => {
    return (
        <div>
            <ProfilerInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}