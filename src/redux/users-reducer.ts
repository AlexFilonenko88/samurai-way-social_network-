const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UserType = {
  id: number,
  photoUrl: string,
  followed: boolean,
  fullName: string,
  status: string,
  location: {
    country: string
    city: string
  },
}
export type InitialStateType = {
  users: UserType[]
}
let initialState: InitialStateType = {
  users: [
    {
      id: 1,
      photoUrl: 'https://prekrasnaja.com/wp-content/uploads/2021/06/1-12.jpg',
      followed: false,
      fullName: 'Dmitry',
      status: 'I am a boss',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: 2,
      photoUrl: 'https://prekrasnaja.com/wp-content/uploads/2021/06/1-12.jpg',
      followed: true,
      fullName: 'Sasha',
      status: 'I am a boss too',
      location: {city: 'Moscow', country: 'Russia'}
    },
    {
      id: 3,
      photoUrl: 'https://prekrasnaja.com/wp-content/uploads/2021/06/1-12.jpg',
      followed: false,
      fullName: 'Andrew',
      status: 'I am a boss too',
      location: {city: 'Kiev', country: 'Ukraine'}
    },
  ],
}

export const userReducer = (state: InitialStateType = initialState, action: any) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }

    default:
      return state;
  }
}

export const followAC = (userId: number) => {
  return {
    type: FOLLOW,
    userId
  } as const
}

export const unfollowAC = (userId: number) => {
  return {
    type: UNFOLLOW,
    userId
  } as const
}

export const setUsersAC = (users: string) => {
  return {
    type: SET_USERS,
    users
  } as const
}
