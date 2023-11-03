var express = require('express');
var router = express.Router();


let options = {
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
};

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-us", options)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-us", options)
  },
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mini message board', messages: messages });
});

router.post('/', function(req, res, next) {
  const messageText = req.body.message;
  const messageUser = req.body.name;

  messages.push({text: messageText, user: messageUser, added: new Date()});

  res.redirect('/')
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'new message' });
});

router.post('/new', function(req, res, next) {
  const messageText = req.body.message;
  const messageUser = req.body.name;

  messages.push({text: messageText, user: messageUser, added: new Date()});

  res.redirect('/')
});


module.exports = router;
