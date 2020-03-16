import {createServer, Server as HttpServer} from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import {Socket, Server} from "socket.io";

const app = express();
let port: string | number = process.env.PORT || 53200;
let server: HttpServer = createServer(app);
let io: Server = socketIo(server);

server.listen(port, () => {
    console.log('Running server on port %s', port)
});

io.on('connect', (socket: Socket) => {
    console.log('Connected client on port %s.', port);

    socket.on('disconnect', () => {
        console.log('Client has disconnected.');
    });
});
