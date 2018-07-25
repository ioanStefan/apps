// Config Sockets
var http = require('http');
var io = require('socket.io');

module.exports = {
    /**
     * 
     * @param {Express} app 
     */
    setupSocketServer(app) {
        http = http.Server(app);
        io = io(http);

        io.on("connection", (socket) => {
            console.log("Socket is connected...");
        })

        const server = http.listen(3020, () => {
            console.log("Socket server listening on 3020")
        })

        return io;
    }
}