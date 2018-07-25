// Imports
const express = require('express');
const config = require('./config/config')
const bodyParser = require('body-parser');
const socketServer = require('./config/socket-server');

let app = express();

// Config Mongoose
let mongoose = require('mongoose');
mongoose.connect(config.database, {
    useNewUrlParser: true
}, (err) => {
    if (err)
        console.log(err);

    console.log("Connected to DISERTATIE database!");
});

mongoose.Promise = Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

global.socketIO = socketServer.setupSocketServer(app);

// Import Routers
const chats = require('./routes/chats');

app.use('/chats', chats);

app.use(express.static(__dirname + "/public"));

app.listen(3018, () => {
    console.log("Server started on port 3018");
});