const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true
  },
  listName: {
    type: String,
    required: true
  }
});

const TodoList = mongoose.model('todolists', listSchema);

module.exports = {
  TodoList
};