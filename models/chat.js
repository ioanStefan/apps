// Imports
let mongoose = require('mongoose');

let ChatSchema = mongoose.Schema({
    name: {
        type: String
    },
    chat: {
        type: String
    }
});

let ChatModel = mongoose.model('chat', ChatSchema);

module.exports = {
    addChat(newChat, callback) {
        newChat.save(callback);
    },
    getChats(query, cols) {
        let result = ChatModel.find(query, cols);
        return result;
    },
    ChatModel
}