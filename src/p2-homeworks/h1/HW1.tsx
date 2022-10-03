import React from 'react'
import Message from "./Message";
const messageData = {
    avatarSrc:'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg',
    name: 'Bob',
    message: 'npm start?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatarSrc={messageData.avatarSrc}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
