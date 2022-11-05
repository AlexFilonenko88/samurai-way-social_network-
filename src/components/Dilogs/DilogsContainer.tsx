import React, {ChangeEvent} from "react";
import D from './Dialogs.module.css'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {AppStoreType} from "../Redux/redux-store";
import {Dialogs} from "./Dilogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


function DialogItem(props: { name: string, id: number }) {
    return (<div className={D.message}>{props.name}</div>)
}

let mapStateToProps = (state: AppStoreType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

