import express from "express";
import http from "http";
import ServerConfig from "./config/serverConfig";
import { Server } from "socket.io";
import cors from "cors";
import roomHandler from "./handlers/RoomHandler";


const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
});

io.on("connection",(socket)=>{
    roomHandler(socket);
    console.log('New user added');
    socket.on("disconnect",()=>{
        console.log("User disconnected");
    });
});

server.listen(ServerConfig.PORT, () => { console.log(`server listening at ${ServerConfig.PORT}`); });
