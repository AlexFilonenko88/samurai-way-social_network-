import React from "react";
// @ts-ignore
import D from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
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

