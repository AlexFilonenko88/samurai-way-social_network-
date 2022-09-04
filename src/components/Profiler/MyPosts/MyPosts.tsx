import React from "react";
import "./MyPosts.module.css";
import P from "./MyPosts.module.css";
import {Post} from "./Post/Posts";

type Props = {
    posts: Array<Posts>
}
type Posts = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = (props: Props) => {
    let postsElements = props.posts
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