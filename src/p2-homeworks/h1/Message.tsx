import React from 'react'
import s from './Message.module.css'
type MessageType={
    avatarSrc:string
    name:string
    message:string
    time:string
}

function Message(props:MessageType) {
    return (
        <article className={s.message}>
           <div>
               <img className={s.imageBlock} src={props.avatarSrc}/>
           </div>

           <div className={s.textBlock}>
               <div className={s.name}>
                   <h2 className={s.name}>{props.name}</h2>
                   <p className={s.text}>{props.message}</p>
               </div>

               <div className={s.time}>
                   {props.time}
               </div>
           </div>
        </article>
    )
}

export default Message
