import React from "react";
import "./MyPosts.module.css";
// @ts-ignore
import P from "./MyPosts.module.css";
import {Post} from "./Post/Posts";

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

export const MyPosts = (props: PostsType) => {
    // let postData = [
    //     {id:1, message: 'Hi, how are you?', likesCount: 2},
    //     {id:2, message: 'Its my first post', likesCount: 5},
    //     {id:2, message: 'Its my first post1', likesCount: 55},
    //     {id:2, message: 'Its my first post2', likesCount: 9},
    // ]

    let postsElements = props.postData
        .map(elem => <Post message={elem.message} likesCount={elem.likesCount}/>)

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

                {postsElements}

            </div>
        </div>
    )
}