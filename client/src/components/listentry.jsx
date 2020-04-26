import React from 'react';

const ListEntry = (props) => {
  return (
    <div>
      <form id="editForm">
        {props.todo}
        <input type="text" name="todo" onChange={props.handleNewTodo}></input>
        <button onClick={() => props.editTodo(props.id)}>Edit</button>
      </form>
    </div>
    )
}

export default ListEntry