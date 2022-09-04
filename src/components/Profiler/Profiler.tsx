import React from "react";
import P from "./Profiler.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilerInfo} from './ProfilerInfo/ProfilerInfo'
import {State} from "../Redux/State";

type Props = {
    state: State
}

 export const Profiler = (props: Props) => {
    return (
        <div>
            <ProfilerInfo/>
            <MyPosts posts={props.state.profilePage.postData} />
        </div>
    )
}