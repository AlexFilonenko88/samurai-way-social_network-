import React, {ChangeEvent} from "react";
import D from './Dialogs.module.css'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {AppStoreType} from "../Redux/redux-store";
import {Dialogs} from "./Dilogs";
import {connect} from "react-redux";
import {RootStateType, store} from "../Redux/store";
import {Dispatch} from "redux";


function DialogItem(props: { name: string, id: number }) {
    return (<div className={D.message}>{props.name}</div>)
}

// export const DialogsContainer = (props: Props) => {
//
//     let state = props.store.getState().dialogsPage
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator());
//     }
//
//     let onNewMessageChange = (body: string) => {
//         // let body = e.target.value;
//         props.store.dispatch(updateNewMessageBodyCreator(body));
//     }
//
//     return (
//         <Dialogs
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             dialogsPage={store.getState().dialogsPage} // state
//             store={props.store}
//         />
//
//     )
// }

let mapStateToProps = (state: AppStoreType) => { // ???? : any
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {          // ??? : any
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body: string) => {                 // ??? : any
            dispatch(updateNewMessageBodyCreator(body));
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

