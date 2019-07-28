import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, deleteTodo, setTodoAsCompleted }) => (
  <li>
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        id="todo-1"
        onClick={() => setTodoAsCompleted(todo.title)}
        disabled={todo.completed ? "disabled" : ""}
        checked={todo.completed}
      />

      <label htmlFor="todo-1" className={todo.completed ? "completed" : ""}>
        {todo.title}
      </label>

      <button
        type="button"
        className="destroy"
        onClick={() => deleteTodo(todo.title)}
      />
    </div>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setTodoAsCompleted: PropTypes.func.isRequired
};

export default Todo;