import React from 'react'
import cl from "./Message.module.css"

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = (props: MessageType) => {
    return (
        <div className={cl.Message}>
            <div className={cl.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={cl.angle}/>
            <div className={cl.letter}>
                <div className={cl.name}>{props.name}</div>
                <div className={cl.message}>{props.message}</div>
                <div className={cl.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
