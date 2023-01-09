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
import {Dispatch} from "redux";

type MapStateToPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: string) => void
  setTotalUsersCount: (totalCount: number) => void
  setCurrentPage:(pageNumber: number) => void
}
export type CommonPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStoreType) => {
  return {
    users: state.users.users,
  //  pageSize: state.usersPage.pageSize,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
  }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
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
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);