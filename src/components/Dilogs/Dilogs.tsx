import React from "react";
// @ts-ignore
import D from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={D.dialog + ' ' + D.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return (
        <div className={D.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={D.dialogs}>
            <div className={D.dialogsItems}>

                <DialogItem name='Alex' id='1'/>
                <DialogItem name='Alex1' id='2'/>
                <DialogItem name='Alex2' id='3'/>
                <DialogItem name='Alex3' id='4'/>
                <DialogItem name='Alex4' id='5'/>

            </div>
            <div className={D.message}>
                <div className={D.messages}>

                    <Message message='Hi'/>
                    <Message message='How is ypur it&'/>
                    <Message message='Yo'/>

                </div>
            </div>
        </div>
    )
}