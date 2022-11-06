const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const ADD_POST = 'ADD_POST';

type postDialogsType = {
    id: number,
    name: string,
}

type postMessageType = {
    id: number,
    message: string,
}

type InitialStateType = {
    dialogs: postDialogsType[],
    messages: postMessageType[],
    newMessageBody: string
}

let initialState: InitialStateType = {
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
}

export const dialogsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const);
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body} as const);