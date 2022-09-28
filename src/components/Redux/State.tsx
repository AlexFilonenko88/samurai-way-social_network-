const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    _callSubscriber: (state?: RootStateType) => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof changeNewTextAC> | ReturnType<typeof addPostAC> | ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>



export const store: StoreType = {
    _state: {
        profilePage: {

            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 2},
                {id: 2, message: 'Its my first post', likesCount: 5},
                {id: 3, message: 'Its my first post1', likesCount: 55},
                {id: 4, message: 'Its my first post2', likesCount: 9},
            ],

            newPostText: 'Hello'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Alex1"},
                {id: 3, name: "Alex2"},
                {id: 4, name: "Alex3"},
                {id: 5, name: "Alex4"},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How...'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageBody: "",
        },
        sidebar: {}
    },
    _callSubscriber(){},


    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },

    subscribe(callback: () => void) {
        this._callSubscriber = callback;
    },

    dispatch(action) { // что именно сделать type: 'ADD-POST'
        if (action.type === ADD_POST) {
            const newPost: postMessageType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.postText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    },

    getState() {
        return this._state;
    },
}


export const changeNewTextAC = (newText: string) => {
    return  {
        type: "UPDATE-NEW-POST-TEXT",
        postText: newText
    }as const
}

export const addPostAC = (postText: string) => {
    return  {
        type: 'ADD-POST',
        postText: postText
    } as const
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE}  as const);
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body} as const);

type postMessageType = {
    id: number
    message: string
    likesCount: number
}

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

type SidebarType = {

}
export type RootStateType  ={
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar :SidebarType
}

// export type State = typeof state
//@ts-ignore
window.store = store;



// rerenderEntireTree(){
//     console.log('WWWWWWW')
// },