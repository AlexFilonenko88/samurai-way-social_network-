import React, {useRef, createRef} from "react";
import "./MyPosts.module.css";
import P from "./MyPosts.module.css";
import {Post} from "./Post/Posts";
import {State} from "../../Redux/State";

type Props = {
    state: State
    posts: Array<Posts>
    addPost: (postMessage: string) => void
    updateNewPostText:(newText: string)=> void
}
type Posts = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = (props: Props) => {
    let postsElements = props.posts
        .map(elem => <Post message={elem.message} likesCount={elem.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current!.value;
        props.addPost(text)
    }

    const onPostChange = () => {
        let text = newPostElement.current!.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={P.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onClick={onPostChange} ref={newPostElement} value={props.state.profilePage.newPostText}/>
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