const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type postMessageType = {
    id: number,
    message: string,
    likesCount: number,
}

export const profileReducer = (state: any, action: any) => {

    switch (action.type){
        case ADD_POST:
            const newPost: postMessageType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            console.log('new text', action.postText)
            state.newPostText = action.postText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        postText: newText
    } as const
}
