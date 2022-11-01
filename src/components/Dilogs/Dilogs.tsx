import React, {ChangeEvent} from "react";
import D from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {AppStoreType} from "../Redux/redux-store";

type Props = {
    store: AppStoreType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogPage: state
}

function DialogItem(props: { name: string, id: number }) {
    return (<div className={D.message}>{props.name}</div>)
}

export const Dialogs = (props: Props) => {

    // let state = props.store.getState().dialogsPage;

    let state = props.store.getState()

    let dialogsElements = state.dialogsPage.dialogs.map((dailog: any) => <DialogItem name={dailog.name} id={dailog.id}/>);

    let messsagesElements = state.dialogsPage.messages.map((m: any) => <Message message={m.message}/>);

    let newMessageBody = state.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        // props.store.dispatch(sendMessageCreator());
        props.sendMessage();
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body);
        // props.store.dispatch(updateNewMessageBodyCreator(body));
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