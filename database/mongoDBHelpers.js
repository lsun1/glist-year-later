const { TodoList } = require('./model.js')

const createTodoHelper = (todo, listName) => {
  return TodoList.create({ todo, listName })
}

const getAllTodosHelper = () => {
  return TodoList.find({})
}

const updateTodoHelper = (id, newTodo) => {
  return TodoList.findOneAndUpdate({_id: id}, {todo: newTodo})
}

const deleteTodoHelper = (id) => {
  return TodoList.deleteOne({_id: id}) //not implemented
}

module.exports = {
  getAllTodosHelper,
  createTodoHelper,
  updateTodoHelper,
  deleteTodoHelper
}