import {addPostAC, changeNewTextAC, profileReducer} from "../../redux/profile-reducer";
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {sidebarReducer} from "../../redux/sidebar-reducer";

export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    _callSubscriber: (state?: RootStateType) => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>


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
    _callSubscriber() {
    },


    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },

    subscribe(callback: () => void) {
        this._callSubscriber = callback;
    },

    dispatch(action) { // что именно сделать type: 'ADD-POST'

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);
    },

    getState() {
        return this._state;
    },
}

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

type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

// export type State = typeof state
//@ts-ignore
window.store = store;


// rerenderEntireTree(){
//     console.log('WWWWWWW')
// },