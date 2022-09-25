import Any = jasmine.Any;

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
        dialogsPage: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is ypur it&"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
        ],
        sidebar: {}
    },

    getState() {
        return this._state;
    },

    // rerenderEntireTree(){
    //     console.log('WWWWWWW')
    // },

    subscribe(observer: () => void) {
        onChange = observer // наблюдатель (observer)
    },

    // addPost() {
    //     const newPost: postMessageType = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     }
    //
    //     this._state.profilePage.posts.push(newPost)
    //
    //     onChange();
    // },

    // updateNewPostText(newText: string) {
    //     console.log('new text', newText)
    //     this._state.profilePage.newPostText = newText
    //
    //     onChange();
    // },

    dispatch(action) { // что именно сделать type: 'ADD-POST'
        if (action.type === 'ADD=POST') {
            const newPost: postMessageType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);

            onChange();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;

            onChange();
        }
    }
}


type postMessageType = {
    id: number
    message: string
    likesCount: number
}

// export type State = typeof state
window.store = store;