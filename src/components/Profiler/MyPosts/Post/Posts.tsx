import React from "react";
// @ts-ignore
import P from "./Posts.module.css";

type MyPostsType = {
    message: string
    likesCount: number
}

export const Post = (props: MyPostsType) => {
    return (
        <>
            <div className={P.item}>
                <img src="https://i2.wp.com/i.redd.it/8a38tepycib21.jpg" alt="avatar"/>
                {props.message}

                <div>
                    <span>like</span>
                    <span>dislike</span>
                </div>
            </div>
        </>
    )
}