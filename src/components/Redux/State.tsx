let renderTree = () => {
    console.log('Hello')
}

export let state = {
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
}

type postMessageType = {
    id: number
    message: string
    likesCount: number
}

export const addPost = () => { // postMessage: string
    const newPost: postMessageType = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }

    state.profilePage.posts.push(newPost)

    renderTree(state);
}

export const updateNewPostText = (newText: string) =>{
    state.profilePage.newPostText = newText

    renderTree(state);
}

export const subscribe = (observer) => {
    renderTree = observer // наблюдатель (observer)
}

export type State = typeof state