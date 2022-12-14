const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type postMessageType = {
    id: number,
    message: string,
    likesCount: number,
}
type InitialStateType = {
    posts: postMessageType[]
    newPostText: string
}
let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'Its my first post', likesCount: 5},
        {id: 3, message: 'Its my first post1', likesCount: 55},
        {id: 4, message: 'Its my first post2', likesCount: 9},
    ],
    newPostText: 'Hello'
}


export const profileReducer = (state: InitialStateType = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: postMessageType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPost: '',
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.postText,
            }
        }
        default:
            return state;
    }
}

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        postText: newText
    } as const
}
