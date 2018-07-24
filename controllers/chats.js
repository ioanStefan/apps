// Imports
const Chat = require('../models/chat');
const ChatModel = Chat.ChatModel;
const socketServer = require('../config/socket-server');

module.exports = {
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    addChat(req, res) {
        try {
            let newChat = new ChatModel({
                name: req.body.name,
                chat: req.body.chat
            });

            Chat.addChat(newChat, function (err, chat) {
                if (err)
                    console.log(err);

                if (chat) {
                    res.sendStatus(200);
                    socketServer.io.emit("chat", req.body);
                }

                res.sendStatus(500);
            })
        } catch (error) {
            res.sendStatus(500);
        }
    },
    async getChats(req, res) {
        let chats = await Chat.getChats({}, {});
        res.send(chats);
    }
}