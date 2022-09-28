import React, {ChangeEvent} from "react";
import D from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {sendMessageCreator, StoreType, updateNewMessageBodyCreator} from "../Redux/State";

type Props = {
    store: StoreType
}

function DialogItem(props: { name: string, id: number }) {
    return (<div className={D.message}>{props.name}</div>)
}

export const Dialogs = (props: Props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs
        .map(dailog => <DialogItem name={dailog.name} id={dailog.id}/>);

    let messsagesElements = state.messages
        .map(m => <Message message={m.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={D.dialogs}>
            <div className={D.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={D.message}>
                <div className={D.messages}>

                    <div>{messsagesElements}</div>
                    <div>
                        <div><textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'></textarea></div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}