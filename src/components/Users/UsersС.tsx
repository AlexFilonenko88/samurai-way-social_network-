import React from "react";
import styles from './users.module.css';
import {CommonPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../../src/assets/images/user.png';

class UsersC extends React.Component<CommonPropsType> {
    constructor(props: CommonPropsType) {
    super(props);

    // this.getUsers();

    // axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //   .then(response => {
    //       this.props.setUsers(response.data.items);
    //     }
    //   )
  }
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          this.props.setUsers(response.data.items);
        });
    }
  }
      render()
    {
      return <div>
        <button onClick={this.getUsers}>Get Users</button>
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