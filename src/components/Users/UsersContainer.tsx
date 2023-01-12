import React from "react";
import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserType
} from "../../redux/users-reducer";
import {AppStoreType} from "../Redux/redux-store";
import {Dispatch} from "redux";
import UsersF from "./UsersF";
import axios from "axios";
import UserFType from './UsersF';

class UsersContainer extends React.Component<CommonPropsType> {
  constructor(props: CommonPropsType) {
    super(props);

    // this.getUsers();
  }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.items);
        }
      )
  }

  // по кнопке вызваь метод
  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     axios.get("https://social-network.samuraijs.com/api/1.0/users")
  //       .then(response => {
  //         this.props.setUsers(response.data.items);
  //       });
  //   }
  // }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    return <UsersF
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
  }
}

type MapStateToPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  // onPageChanged: (pages: number) => void
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: string) => void
  setTotalUsersCount: (totalCount: number) => void
  setCurrentPage: (pageNumber: number) => void

}
export type CommonPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStoreType) => {
  return {
    users: state.users.users,
     // pageSize: state.usersPage.pageSize,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    // onPageChanged: state.users.
  }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);