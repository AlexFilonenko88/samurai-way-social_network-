import React from "react";
import {connect} from "react-redux";
import UsersC from './UsersС';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserType
} from "../../redux/users-reducer";
import {AppStoreType} from "../Redux/redux-store";
import {type} from "os";

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
  return {
    users: state.users.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    },
    setCurrentPAge: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);