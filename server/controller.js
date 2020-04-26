const db = require('../database/index.js')
const { createTodoHelper, getAllTodosHelper, updateTodoHelper } = require('../database/mongoDBHelpers.js')

module.exports = {
  get: (req, res) => {
    console.log("IN GET")
    getAllTodosHelper()
      .then((data) => res.status(200).send(data))
      .catch(err => res.status(404).send("error", err))
  },

  post: (req, res) => {
    console.log("IN POST")
    const {todo, listName} = req.body
    createTodoHelper( todo, listName )
    .then(() => res.status(200).send('Successfully posted'))
    .catch(err => res.status(404).send('Error posting', err))
  },

  patch: (req, res) => {
    console.log("IN PATCH")
    const {id, newTodo} = req.body
    updateTodoHelper(id, newTodo)
      .then(() => res.status(201).send("patch ok"))
      .catch(err => res.status(404).send("patch error", err))
  },

  delete: (req, res) => {
    console.log("IN DELETE")

  }
}