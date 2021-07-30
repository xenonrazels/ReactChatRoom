import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css'

const Join=()=>{
    const [name,setName]=useState('');
    const [room,setRoom]=useState('');
    return (
        <div className='joinOuterContainer'>
            <div className="joinInnerContainer">
                <h1 >Welcome to Xen Freaky Chat Room </h1>
            <h2  className="heading">Join</h2>
            <div><input type="text" placeholder="Name" className="joinInput" onChange={(event)=>setName(event.target.value)}/></div>
            <div><input type="text" placeholder="Room" className="joinInput mt-20" onChange={(event)=>setRoom(event.target.value)}/></div>
            <Link onClick={(event)=>(!name||!room ? event.preventDefault:null)} to={`/chat?name=${name}&room=${room}`}>
            <button type='submit' className="btn">Sign in</button>
            </Link>
            </div>            
        </div>
    )
}
export default Join;
