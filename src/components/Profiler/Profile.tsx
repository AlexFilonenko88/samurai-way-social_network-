import React, {useEffect} from "react";
import {ProfilerInfo} from './ProfilerInfo/ProfilerInfo'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type Props = {
   // store:AppStoreType
//     profilePage: any
//     dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: Props) => {
    return (
        <div>
            <ProfilerInfo/>
            <MyPostsContainer
            />
        </div>
    )
}