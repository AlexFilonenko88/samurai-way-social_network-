import React, {useRef, createRef} from "react";
import "./MyPosts.module.css";
import P from "./MyPosts.module.css";
import {Post} from "./Post/Posts";
import {State} from "../../Redux/State";

type Props = {
    posts: Array<Posts>
    addPost: (postMessage: string) => void
    updateNewPostText:(newText: string)=> void
    newPostText: string
}
type Posts = {
    id: number
    message: string
    likesCount: number
    dispatch: string
}

export const MyPosts = (props: Props) => {
    let postsElements = props.posts
        .map(elem => <Post message={elem.message} likesCount={elem.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current!.value;
        props.dispatch({type: 'ADD=POST'})
    }

    const onPostChange = () => {
        let text = newPostElement.current!.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText:text};
        props.dispatch(action)
    }

    return (
        <div className={P.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onClick={onPostChange} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={P.item}>
                {postsElements}
            </div>
        </div>
    )
}