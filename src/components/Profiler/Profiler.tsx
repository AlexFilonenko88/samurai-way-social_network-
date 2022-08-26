import React from "react";
// @ts-ignore
import P from "./Profiler.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilerInfo} from './ProfilerInfo/ProfilerInfo'


export const Profiler = () => {
    return (
        <div>

            <ProfilerInfo/>

            <MyPosts/>

        </div>
    )
}