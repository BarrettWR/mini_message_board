var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const connection = require("../connection");
const Message = require('../models/message');
const Swal = require('sweetalert2');

mongoose.set("strictQuery", false);


async function getMessages() {
  try {
    await mongoose.connect(connection);
    console.log('Database connected!');

    let dbmessages = await Message.find();

    console.log("Debug: Closing mongoose");
    mongoose.connection.close();

    // Return the messages
    return dbmessages;
  } catch (err) {
    console.log(err);
  }
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  // Get the messages
  let messages = await getMessages();

  // Render the page with the messages
  res.render('index', { title: 'mini message board', messages: messages });
});


router.post('/', async function(req, res, next) {
  try {
    const messageText = req.body.message;
    const messageUser = req.body.name;
    const messageDate = new Date();
    
    const message = new Message({name: messageUser, message: messageText, date: messageDate})

    await mongoose.connect(connection);
    console.log('Database connected!');

    await message.save()

    console.log("Debug: Closing mongoose");
    mongoose.connection.close();

    res.redirect('/')
  }
  catch (err) {
    res.redirect('/')
  }
});


module.exports = router;
