import React from 'react';
import axios from 'axios';
import ListEntry from './listentry.jsx'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      listName: 'Todos',
      todos: [],
      newTodo: ''
    }
    //function binding
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchTodos = this.fetchTodos.bind(this);
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    axios
      .get('/api/todoList')
      .then(({data}) => {
        this.setState({ todos: data}, () => console.log(this.state.todos))
      })
      .catch(err => console.log('error getting todos: ',err))
  }

  handleInput(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleNewTodo(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  editTodo(id) {
    const { newTodo } = this.state;
    axios
      .patch('/api/todoList', { id, newTodo })
      .then(() => this.fetchTodos())
      .catch(err => console.log('error editing todo: ', err))
    
    document.getElementById('editForm').reset()
  }

  handleSubmit(e) {
    e.preventDefault();

    const {todo, listName} = this.state;
    axios
      .post('/api/todoList', { todo, listName})
      .then(() => this.fetchTodos())
      .catch(err => console.log('error posting todos: ', err))
  
    document.getElementById('form').reset()
  }

  render() {
    return(
      <div>
        <h1>Todos</h1>
        <form id="form" onSubmit={this.handleSubmit}>
          Enter new Todo: <input type="text" name="todo" onKeyUp={this.handleInput} />
        </form>
        {this.state.todos.map((todo, index) => {
           return (
             <ListEntry key={index} todo={todo.todo} id={todo._id} handleNewTodo={this.handleNewTodo} editTodo={this.editTodo} />
             )
         })}
      </div>
      )
  }
}

export default List