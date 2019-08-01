import React from 'react';
import PropTypes from 'prop-types';
const classNames = require('classnames');

const Todo = ({ todo, deleteTodo, toggleTodoComplete }) => {
  const todoClass = classNames({
    'completed': todo.completed
  });

  return (
    <li>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          id={`todo-${todo.title}`}
          onClick={() => toggleTodoComplete(todo.title)}
          checked={todo.completed}
        />

        <label htmlFor={`todo-${todo.title}`} className={todoClass}>
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
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodoComplete: PropTypes.func.isRequired
};

export default Todo;