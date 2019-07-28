import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = ({
  todos,
  setAllAsCompleted,
  allCompleted,
  filterTodoList,
  deleteTodo,
  setTodoAsCompleted
}) => (
  <section className="main">
    <input
      type="checkbox"
      id="toggle-all"
      className="toggle-all"
      onClick={setAllAsCompleted}
      checked={allCompleted}
      disabled={allCompleted}
    />
    <label htmlFor="toggle-all">Mark all as complete</label>

    <ul className="todo-list">
      {filterTodoList(todos).map(todo => (
        <Todo
          todo={todo}
          deleteTodo={deleteTodo}
          setTodoAsCompleted={setTodoAsCompleted}
          key={todo.title}
        />
      ))}
    </ul>
  </section>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setAllAsCompleted: PropTypes.func.isRequired,
  allCompleted: PropTypes.bool.isRequired,
  filterTodoList: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setTodoAsCompleted: PropTypes.func.isRequired
};

export default TodoList;