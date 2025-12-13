/**
 * 
 * This project is to create a system where an admin can show a form on another device 
 * remotley. This project is also going to be used to show a select video/image.
 * 
 * 
 * Tablet <- Server <- Admin
 * 
 * In essence this will require a server to be available for the tablet to connect to with a unique 
 * ID so you are able to have multiple rooms within the system.
 * 
 * This is going to be the server files.
 * 
 * (c) Rhys Mason-Gorrie | Licenced under the GNU licence.
 * https://www.thenetguy.uk/blog/remote-user-experience
 * 
 */

// Module imports.
import express from 'express';
import { createServer } from 'node:http';

// Files
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Socket IO
import { Server } from 'socket.io';

// Variables
const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

import { AuthorisedToken } from './modules/AuthorisedTokens.js';

const authToken = new AuthorisedToken();

// Endpoints

// Client
app.get('/', (req, res) => {
    res.sendFile(join(__dirname + '/../app/index.html'));
});

// Admin
app.get('/app.admin', (req, res) => {
    res.sendFile(join(__dirname + '/../app/admin.html'));
});

// Socket Connection
io.on('connection', (socket) => {
    console.log('[Server | SOCKET] A new client has connected.');

    io.emit('securedToken', authToken.generateUniqueTokens())

    socket.on('newElement', (msg) => {
        io.emit('newElement', msg);
    })

    socket.on('newElementAlert', (msg) => {
        io.emit('newElementAlert', msg);
    })

    socket.on('reloadClient', () => {
        io.emit('reloadClient', '');
    })

    socket.on('disconnect', () => {
        console.log('[Server | SOCKET] A new client has disconnected.');
    })
})

// Server
server.listen(3000, () => {
    console.log('Server on localhost:3000');  
})