import React, {useRef, createRef} from "react";
import "./MyPosts.module.css";
import P from "./MyPosts.module.css";
import {Post} from "./Post/Posts";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {ActionsTypes} from "../../Redux/store";

type Props = {
    posts: Array<Posts>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
    // dispatch: (text: string) => void
    addPost: (text: string) => void
}
type Posts = {
    id: number
    message: string
    likesCount: number

}

const MyPosts = (props: Props) => {
    let postsElements = props.posts
        .map(elem => <Post message={elem.message} likesCount={elem.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current!.value;
        props.dispatch(addPostAC(text));
    }

    const onPostChange = () => {
        let text = newPostElement.current!.value;
        props.dispatch(changeNewTextAC(text));
    }

    return (
        <div className={P.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}/>
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

export default MyPosts;