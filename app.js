const express = require('express');
const app = express();
const path = require('node:path');
const PORT = 8080;
const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Message board app listening on port ${PORT}! http://localhost:${PORT}`);
});

app.use(express.urlencoded({ extended: true }));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", indexRouter);
app.use("/new", newMessageRouter);



app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message || "Internal Server Error");
});