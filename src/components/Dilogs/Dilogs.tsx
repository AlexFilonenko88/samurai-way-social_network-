import React from "react";
import D from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {State} from "../Redux/State";

type Props = {
  state: State
}

function DialogItem(props: { name: string, id: number }) {
    return null;
}

export const Dialogs = (props:Props) => {

    let dialogsElements = props.state.profilePage.dialogs
        .map(dailog => <DialogItem name={dailog.name} id={dailog.id}/>)

    let messsagesElements = props.state.dialogsPage
        .map(m => <Message message={m.message}/>)

    return (
        <div className={D.dialogs}>
            <div className={D.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={D.message}>
                <div className={D.messages}>

                    {messsagesElements}

                </div>
            </div>
        </div>
    )
}