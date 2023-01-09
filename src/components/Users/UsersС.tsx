import React from "react";
import styles from './users.module.css';
import {CommonPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../../src/assets/images/user.png';

class UsersC extends React.Component<CommonPropsType> {
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

  onPageChanged= (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    const pages = [];
    for (let i=1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <div>
      {/*<button>Get Users</button>*/}
      <div>
        {pages.map(p => {
          return <span className={this.props.currentPage === p ? styles.selectPage: ''}
          onClick={(e)=>{this.onPageChanged(p)}}
          >{p}</span>
        })}
      </div>
      {
        this.props.users.map(u => <div key={u.id}>
        <span>
            <div>
              <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
            </div>
          <div>
            {u.followed
              ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
              : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
}

export default UsersC;