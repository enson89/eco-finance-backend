const getTodos = require('./get-todos.js');
const getTodo = require('./get-todo.js');
const createTodo = require('./create-todo.js');
const updateTodo = require('./update-todo.js');
const deleteTodo = require('./delete-todo.js');

module.exports = {
    paths:{
        '/todos':{
            ...getTodos,
            ...createTodo
        },
        '/todos/{id}':{
            ...getTodo,
            ...updateTodo,
            ...deleteTodo
        }
    }
}