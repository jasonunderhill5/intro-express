// import modules
import express from 'express'
import { todos } from './data/todo-data.js'


// create Express app
const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')

// mount middleware (app.use)

// mount routes
app.get('/', function(req, res) {
  res.redirect('/todos')
})

app.get('/waffles', function(req, res) {
  res.redirect('/home')
})

app.get('/pandas', function(req, res) {
  res.send('<h2>Pandas are dope, yo!</h2>')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/todos', function(req, res) {
  res.render('todos/index', {
    todos: todos
  })
})

// tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000')
})