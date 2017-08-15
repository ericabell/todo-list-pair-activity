const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

let todos = {todos: [
  {name: 'Learn Node basics', completed: 'checked'},
  {name: 'Learn Express basics', completed: 'checked'},
  {name: 'Learn Mustache', completed: 'checked'},
  {name: 'Learn HTML forms with Express', completed: ''},
  {name: 'Learn about authentication', completed: ''},
  {name: 'Learn how to connect to PostgreSQL', completed: ''},
  {name: 'Learn how to create databases', completed: ''},
  {name: 'Learn SQL', completed: ''},
  {name: 'Learn how to connect to PostgreSQL from node', completed: ''},
  {name: 'Learn how to use Sequelize', completed: ''},
]}

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here
  res.render('todo', todos);
})

app.listen(3000, function () {
  console.log('Successfully started express application on port 3000!');
})
