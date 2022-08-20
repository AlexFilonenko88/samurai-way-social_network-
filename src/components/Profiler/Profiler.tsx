import React from "react";
import "./Profiler.module.css";
import P from "./Profiler.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profiler = () => {
    return (
        <div className={P.content}>
            <div className={P.content}>
                <img
                    src='https://vsegda-pomnim.com/uploads/posts/2022-04/1649325800_28-vsegda-pomnim-com-p-foto-morya-plyazha-43.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}