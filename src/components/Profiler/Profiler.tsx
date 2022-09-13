import React from "react";
import P from "./Profiler.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilerInfo} from './ProfilerInfo/ProfilerInfo'
import {addPost, State} from "../Redux/State";

type Props = {
    state: State
    addPost: (postMessage: string) => void
}

 export const Profiler = (props: Props) => {
    return (
        <div>
            <ProfilerInfo/>
            <MyPosts posts={props.state.profilePage.posts} addPost={props.addPost} />
        </div>
    )
}