import React from 'react';


import './Message.css';
const Message=({name,message:{user,text}})=>{
    let isSentByCurrentUser=false;

   const  trimmedName=name.trim().toLowerCase();
   console.log(trimmedName)
    if (trimmedName===user){
    isSentByCurrentUser =true;
    }
    return (
        isSentByCurrentUser 
        ? (
            <div className="messageContainer  justify-end">
                <p className="sentText pr-10">{name}</p>
                <div className="messageSentbox backgroundBlue">
                    <p className="messageText colorwhite">{text} </p>
                </div>
            </div>
        )
        :
        (
            <div className="messageContainer justify-start">
                <p className="sentText pl-10">{user}</p>
                <div className="messageSentbox backgroundLight ">
                    <p  className="messageText colorDark ">{text}</p>
                </div>
            </div>
        )
        )

    
}
export default Message;