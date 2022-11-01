import React from "react";
import {ProfilerInfo} from './ProfilerInfo/ProfilerInfo'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppStoreType} from "../Redux/redux-store";


type Props = {
    store:AppStoreType
//     profilePage: any
//     dispatch: (action: ActionsTypes) => void
}

export const Profiler = (props: Props) => {
    return (
        <div>
            <ProfilerInfo/>
            <MyPostsContainer
                store={props.store}
                // posts={props.profilePage.posts}
                // newPostText={props.profilePage.newPostText}
                // dispatch={props.dispatch}
            />
        </div>
    )
}