import React from 'react';
import './Infobox.css';

import Messages  from '../Messages/Messages';
const Infobox=({room,setMessage,sendMessage,message, messages,setMessages,name})=>{

return (
    <div className="InnerContainer">

        <div className="RightContainer">
            <div className="container-header ">
            <h3>List of rooms</h3>
            
            </div>
        </div>
        <div className="LeftContainer ">
            <div className="container-header r">
            <h3>{room}</h3>
            
            </div>
            <div>
                <Messages name={name} messages={messages} />
            </div>
            <div className="Messagebox">
                    {/* <form> */}
                    <input type="text" value={message} onChange={(event)=>setMessage(event.target.value)}   placeholder="Type your message here." onKeyPress={event=>event.key==="Enter"? sendMessage(event):null} />
                    <button className="send-btn" type="submit" onClick={(event)=>sendMessage(event)}>Send</button>
                    {/* </form> */}
            
            </div>

        </div>

    </div>
)

}
export default Infobox;
    