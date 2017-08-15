const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

let todos = {list: [
  {name: 'Learn Node basics', completed: true},
  {name: 'Learn Express basics', completed: true},
  {name: 'Learn Mustache', completed: true},
  {name: 'Learn HTML forms with Express', completed: false},
  {name: 'Learn about authentication', completed: false}
]}

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here
  res.render('todo', {test: 'this is a test'});
})

app.listen(3000, function () {
  console.log('Successfully started express application on port 3000!');
})
