const {Router} = require('express');
const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
  res.render('newMessage', { title: 'New Message Board' });
});

module.exports = newMessageRouter;