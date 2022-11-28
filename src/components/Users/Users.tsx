import React from "react";
import styles from './users.module.css';
import {InitialStateType} from '../../redux/users-reducer'

let Users = (props: InitialStateType) => {
  // props.setUsers([
  //   {
  //     id: 1,
  //     photoUrl: 'https://prekrasnaja.com/wp-content/uploads/2021/06/1-12.jpg',
  //     followed: false,
  //     fullName: 'Dmitry',
  //     status: 'I am a boss',
  //     location: {city: 'Minsk', counter: 'Belarus'}
  //   },
  //   {
  //     id: 2,
  //     photoUrl: 'https://prekrasnaja.com/wp-content/uploads/2021/06/1-12.jpg',
  //     followed: true,
  //     fullName: 'Sasha',
  //     status: 'I am a boss too',
  //     location: {city: 'Moscow', counter: 'Russia'}
  //   },
  //   {
  //     id: 3,
  //     photoUrl: 'https://prekrasnaja.com/wp-content/uploads/2021/06/1-12.jpg',
  //     followed: false,
  //     fullName: 'Andrew',
  //     status: 'I am a boss too',
  //     location: {city: 'Kiev', counter: 'Ukraine'}
  //   },
  // ])

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto}/>
            </div>
          <div>
            {u.followed
              ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              : <button onClick={() => props.follow(u.id)}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div><div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;