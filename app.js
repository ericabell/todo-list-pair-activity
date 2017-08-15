const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

let todos = [
  {name: 'todo1', completed: true},
  {name: 'todo2', completed: true},
  {name: 'todo3', completed: true},
  {name: 'todo4', completed: false},
  {name: 'todo5', completed: false},
]

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here
  res.send('Hello world!');
})

app.listen(3000, function () {
  console.log('Successfully started express application on port 3000!');
})
