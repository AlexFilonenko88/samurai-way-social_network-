import React from "react";
import P from "./Profiler.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilerInfo} from './ProfilerInfo/ProfilerInfo'
import {addPost, State} from "../Redux/State";

type Props = {
    state: State
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText:(newText: string)=> void
    // profilePage: {}
}

 export const Profiler = (props: Props) => {
    return (
        <div>
            <ProfilerInfo/>
            <MyPosts
                posts={props.state.profilePage.posts}
                newPostsText={props.state.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}