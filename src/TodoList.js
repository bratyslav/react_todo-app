import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = ({
  todos,
  toggleAllComplete,
  allCompleted,
  filterTodoList,
  deleteTodo,
  toggleTodoComplete
}) => (
  <section className="main">
    <input
      type="checkbox"
      id="toggle-all"
      className="toggle-all"
      onClick={toggleAllComplete}
      checked={allCompleted}
    />
    <label htmlFor="toggle-all">Mark all as complete</label>

    <ul className="todo-list">
      {filterTodoList(todos).map(todo => (
        <Todo
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodoComplete={toggleTodoComplete}
          key={todo.title}
        />
      ))}
    </ul>
  </section>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleAllComplete: PropTypes.func.isRequired,
  allCompleted: PropTypes.bool.isRequired,
  filterTodoList: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodoComplete: PropTypes.func.isRequired
};

export default TodoList;