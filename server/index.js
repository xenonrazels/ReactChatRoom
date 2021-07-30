const express=require('express');
const socketio=require('socket.io');
const http=require('http');
const PORT =process.env.PORT || 5000
const router=require('./router')
const {addUser,removeUser,getUser,getUsersInRoom} =require('./users')
const app= express();
const server=http.createServer(app)
// const io=socketio(server)
corsOptions={
    cors: true,
    origins:["http://localhost:3000"],
   }
   const io = socketio(server, corsOptions);

io.on('connection',(socket)=>{
    console.log("We have a new connection.");

    socket.on('join',({name,room},callback)=>{
        const {error,user}=addUser({id:socket.id,name,room});
       if (error) return callback(error);
       socket.emit('message',{ user:'admin',text:`${user.name}, welcome to the room ${user.room}`});
       socket.broadcast.to(user.room).emit('message',{user:'admin' ,text:`${user.name}, has joined!`});
       
       socket.join(user.room);
       callback();
    });
    socket.on('sendMessage',(message,callback)=>{
        const user=getUser(socket.id);
    
        io.to(user.room).emit('message',{user:user.name,text:message});
        callback();

    })

    socket.on('disconnects',()=>{
        console.log("User have left");
    })

});
app.use(router);
server.listen(PORT,()=> console.log(`Server is listening at port ${PORT}`));


