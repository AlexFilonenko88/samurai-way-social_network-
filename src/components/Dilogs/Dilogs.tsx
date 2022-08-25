import React from "react";
// @ts-ignore
import D from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={D.dialogs}>
            <div className={D.dialogsItems}>
                <div className={D.dialog + ' ' + D.active}>
                    Alex
                </div>
                <div className={D.dialog}>
                    Alex1
                </div>
                <div className={D.dialog}>
                    Alex2
                </div>
                <div className={D.dialog}>
                    Alex3
                </div>
                <div className={D.dialog}>
                    Alex4
                </div>
            </div>
            <div className={D.message}>
                <div className={D.messages}>
                    <div className={D.message}>Hi</div>
                    <div className={D.message}>How is ypur it&</div>
                    <div className={D.message}>Yo</div>
                </div>
            </div>
        </div>
    )
}