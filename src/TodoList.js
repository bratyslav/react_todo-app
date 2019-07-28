import React from 'react';
import Todo from './Todo';

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

export default TodoList;