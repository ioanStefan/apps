// Imports
const express = require('express');
let router = express.Router();

const ChatsController = require('../controllers/chats')

router.post('/add', ChatsController.addChat);

router.get('/view', ChatsController.getChats);

module.exports = router;