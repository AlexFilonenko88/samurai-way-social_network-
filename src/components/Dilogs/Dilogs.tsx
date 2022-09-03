import React from "react";
// @ts-ignore
import D from './Dialogs.module.css'
import {Message} from "./Message/Message";

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}

type PostsType = {
    // id: number
    // message: string
    // likesCount: number
    posts: Array<Posts>
}
type Posts = {
    id: number
    message: string
    likesCount: number
}

function DialogItem(props: { name: string, id: number }) {
    return null;
}

export const Dialogs = (props:PostsType) => {

    let dialogsElements = props.state.dialogs
        .map(dailog => <DialogItem name={dailog.name} id={dailog.id}/>)

    let messsagesElements = props.state.messsages
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