import React from "react";
import P from "./Profiler.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilerInfo} from './ProfilerInfo/ProfilerInfo'
import {ActionsTypes} from "../Redux/State";


type Props = {
    profilePage: any
    dispatch: (action: ActionsTypes) => void
}

 export const Profiler = (props: Props) => {
    return (
        <div>
            <ProfilerInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}

            />
        </div>
    )
}