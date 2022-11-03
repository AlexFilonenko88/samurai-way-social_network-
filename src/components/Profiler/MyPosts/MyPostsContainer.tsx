import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {ActionsTypes} from "../../Redux/store";
import MyPosts from "./MyPosts";
import {AppStoreType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

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

// export const MyPostsContainer = (props: Props) => {
//     let state = props.store.getState();
//
//     let addPost = (text: string) => {
//         // let text = newPostElement.current!.value;
//         props.dispatch(addPostAC(text));
//     }
//
//     const onPostChange = (text: string) => {
//         // let text = newPostElement.current!.value;
//         let action = changeNewTextAC(text);
//         props.dispatch(action);
//     }
//
//     return (
//         <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.posts} // props.posts
//             newPostText={state.profilePage.newPostText}
//         />
//     )
// }

const mapStateToProps = (state: AppStoreType) => { // ???
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => { // ???
    return {
        updateNewPostText: (text: string) => { // ???
            let action = changeNewTextAC(text);
            dispatch(action);
        },
        addPost: ( postText: string) => {
            dispatch(addPostAC(postText));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);