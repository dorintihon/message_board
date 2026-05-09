const {Router} = require('express');
const indexRouter = Router();
let messageId = 0;

let messages = [
  {
    id: messageId++,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: messageId++,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Message Board', messages });
});

indexRouter.post('/new', (req, res) => {
  const { text, user } = req.body;
  if (text && user) {
    messages.push({
      id: messageId++,
      text,
      user,
      added: new Date()
    });
  }
  res.redirect('/');
});

indexRouter.post('/delete/:id', (req, res) => {
  const id = Number(req.params.id);
  messages = messages.filter(message => message.id !== id);
  res.redirect('/');
//   console.log(messages);
});

module.exports = indexRouter;