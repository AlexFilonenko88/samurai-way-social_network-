import React from "react";
import {connect} from "react-redux";
import UsersC from "./UsersC";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {AppStoreType} from "../Redux/redux-store";

type MapStateToPropsType = {
  users: UserType[]
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: string) => void
}
export type CommonPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStoreType) => {
  console.log(state.users.users)
  return {
    users: state.users.users
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users: string) => {
      dispatch(setUsersAC(users));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);