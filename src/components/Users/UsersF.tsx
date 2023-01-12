import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {CommonPropsType} from "./UsersContainer";
import {UserType} from "../../redux/users-reducer";

type UserFType = {
  users: UserType[]
  onPageChanged: (pageNumber: number)=> void
  totalUsersCount: number
  currentPage: number
  pageSize: number
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

// описать props  и избавиться от Partialon  {PageChanged: (pageNumber: number)=> void}

let UsersF = (props:UserFType) => {

  let pagesCount = Math.ceil(props.totalUsersCount! / props.pageSize);

  const pages = [];
  for (let i=1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    {/*<button>Get Users</button>*/}
    <div>
      {pages.map(p => {
        return <span className={props.currentPage === p ? styles.selectPage : ''}
                     onClick={(e) => {
                       props.onPageChanged(p)
                     }}
        >{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
            <div>
              <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
            </div>
          <div>
            {u.followed
              ? <button onClick={() => props.unfollow!(u.id)}>Unfollow</button>
              : <button onClick={() => props.follow!(u.id)}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
           {/* <div>{u.location.country}</div>
            <div>{u.location.city}</div>*/}
          </span>
        </span>
      </div>)
    }
  </div>
}

export default UsersF;
