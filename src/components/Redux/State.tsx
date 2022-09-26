const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export let onChange = () => {
    console.log('Hello')
}

export let store = {
    _state: {
        profilePage: {
            messageForNewPost: 'fggh',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 2},
                {id: 2, message: 'Its my first post', likesCount: 5},
                {id: 3, message: 'Its my first post1', likesCount: 55},
                {id: 4, message: 'Its my first post2', likesCount: 9},
            ],
            dialogs: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Alex1"},
                {id: 3, name: "Alex2"},
                {id: 4, name: "Alex3"},
                {id: 5, name: "Alex4"},
            ],
            newPostText: 'Hello'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is ypur it&"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
            ],
            message: [
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

    getState() {
        return this._state;
    },

    // rerenderEntireTree(){
    //     console.log('WWWWWWW')
    // },

    subscribe(observer: () => void) {
        this._callSubscriber = observer;
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

            onChange();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.message.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

type postMessageType = {
    id: number
    message: string
    likesCount: number
}

// export type State = typeof state
window.store = store;