import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { addTodo, delTodo } from "../../../redux/store/actions/todoAction"

const TodoApp= () => {
const todos = useSelector(state => state.todoReducer.todos);
const dispatch = useDispatch();
  const addNewTodo = () => {
    const data = {
      id:3,
      title: "This is three",
      complete: false
    }
    dispatch(addTodo(data))
  }

  return(
    <div>
      <h1>todo app</h1>
      <button onClick={addNewTodo}>add</button>
      {todos.map(todo =>
        <div key={todo.id}>
          <p>{todo.title}</p>
          <button onClick={() => dispatch(delTodo(todo.id))}>delete</button>
        </div>
      )}
    </div>
  )
}

export default TodoApp;