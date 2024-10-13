
import { Socket } from 'socket.io';
import {v4 as UUIDv4} from 'uuid';
const roomHandler = (socket: Socket) => {
    const createRoom = () => {
        const roomId = UUIDv4();
        socket.join(roomId);
        
        socket.emit("room-created",{roomId});
        console.log("room created with id",roomId)
    };


    const joinRoom =({roomId}:{roomId:string})=>{
        console.log("New room joined room ",roomId);
    };

    socket.on('create-room',createRoom);
    socket.on('join-room',joinRoom);
};

export default roomHandler;
