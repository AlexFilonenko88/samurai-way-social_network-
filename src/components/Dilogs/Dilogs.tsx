import React, {ChangeEvent} from "react";
import D from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogPageType} from "../Redux/store";

type Props = {
  //  store: AppStoreType
    updateNewMessageBody: (body: string) => void
    sendMessage: (body: string) => void
    dialogsPage: DialogPageType
}

function DialogItem(props: { name: string, id: number }) {
    return (<div className={D.message}>{props.name}</div>)
}

export const Dialogs = (props: Props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((dailog: any) => <DialogItem name={dailog.name} id={dailog.id}/>);

    let messsagesElements = props.dialogsPage.messages.map((m: any) => <Message message={m.message}/>);

    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage(newMessageBody);
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body);
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