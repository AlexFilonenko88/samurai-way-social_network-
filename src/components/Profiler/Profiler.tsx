import React from "react";
// @ts-ignore
import P from "./Profiler.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilerInfo} from './ProfilerInfo/ProfilerInfo'

type PostsType = {
    // id: number
    // message: string
    // likesCount: number
    posts: Array<Posts>
}
type Posts = {
    id: number
    message: string
    likesCount: number
}

export const Profiler = (props: PostsType) => {


    // @ts-ignore
    return (
        <div>

            <ProfilerInfo/>

            <MyPosts posts={props.state.postData} />

        </div>
    )
}