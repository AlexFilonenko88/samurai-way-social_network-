import React, {ChangeEvent} from "react";
import D from './Dialogs.module.css'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {AppStoreType} from "../Redux/redux-store";
import {Dialogs} from "./Dilogs";

type Props = {
    store: AppStoreType
}

function DialogItem(props: { name: string, id: number }) {
    return (<div className={D.message}>{props.name}</div>)
}

export const DialogsContainer = (props: Props) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body: string) => {
        // let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogPage={state}
            store={props.store}
        />

    )
}