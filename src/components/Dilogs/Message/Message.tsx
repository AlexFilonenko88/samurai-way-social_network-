import React from "react";
// @ts-ignore
import D from './../Dialogs.module.css'

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={D.message}>{props.message}</div>
    )
}