var socket = io("http://172.17.0.140:3020");
socket.on("chat", addChat);

$(() => {
    $("#send").click(() => {
        var chatMessage = {
            name: $("#txtName").val(),
            chat: $("#txtMessage").val()
        }

        postChat(chatMessage);
    })
})

function postChat(chatMessage) {
    $.post("/chats/add", chatMessage)
}

function getChats() {
    $.get("/chats/view", (res) => {
        res.array.forEach(addChat);
    })
}

function addChat(chatObj) {
    $("#messages").append(`<h5>${chatObj.name}</h5><p>${chatObj.chat}</p>`);
}