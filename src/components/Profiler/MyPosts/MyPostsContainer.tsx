import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {ActionsTypes} from "../../Redux/store";
import MyPosts from "./MyPosts";
import {AppStoreType} from "../../Redux/redux-store";

type Props = {
    posts: Array<Posts>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
    store: AppStoreType
}

type Posts = {
    id: number
    message: string
    likesCount: number
}

export const MyPostsContainer = (props: Props) => {
    let state = props.store.getState();

    let addPost = (text: string) => {
        // let text = newPostElement.current!.value;
        props.dispatch(addPostAC(text));
    }

    const onPostChange = (text: string) => {
        // let text = newPostElement.current!.value;
        let action = changeNewTextAC(text);
        props.dispatch(action);
    }

    return (
        <MyPosts
            dispatch={onPostChange}
            addPost={addPost}
            posts={props.posts}
        />


    )
}