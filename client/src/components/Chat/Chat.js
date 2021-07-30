import React ,{useState,useEffect}from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Infobox from '../Infobox/Infobox';
let socket;
const Chat=({location})=>{
    const [name,setName]=useState('');
    const [room ,setRoom]=useState('');
    const [message,setMessage]=useState('');
    const [messages,setMessages]=useState([]);

    const ENDPOINT='localhost:5000';
    useEffect(()=> {
        const {name,room}=queryString.parse(location.search);
        
        socket=io(ENDPOINT);
         
        setName(name);
        setRoom(room);
        socket.emit('join',{name,room},()=>{
        });

        return ()=>{
            socket.emit('disconnects');
            socket.off();
        }
        
    },[ENDPOINT,location.search]);

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message]);

        })
        },[messages]);

    const sendMessage=(event)=>{
            event.preventDefault();
            if (message){
              socket.emit('sendMessage',message,()=>setMessage(''));
               
            }
        }
        console.log(message,messages)
    return (
        <div>
           
                <Infobox room={room} setMessage={setMessage} sendMessage={sendMessage} message={message} messages={messages} setMessages={setMessages} name={name}/>
                

         
           {/* <input value={message}  onChange={(event)=>setMessage(event.target.value)} }/>  */}
        </div>
    )
}
export default Chat;
