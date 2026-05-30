const {Router} = require('express');
const indexRouter = Router();
const db = require('../db/queries');
let messageId = 0;

indexRouter.get('/', async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Message Board', messages });
});

indexRouter.post('/new', async (req, res) => {
  const { text, user } = req.body;
  if (text && user) {
    await db.insertMessage(user, text);
  }
  res.redirect('/');
});

indexRouter.post('/delete/:id', async (req, res) => {
  const id = Number(req.params.id);
  await db.deleteMessage(id);
  res.redirect('/');
//   console.log(messages);
});

module.exports = indexRouter;