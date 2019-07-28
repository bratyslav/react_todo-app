import React from 'react';

const TodoHeader = ({ addTodo, inputValue }) => (
  <header className="header">
    <h1>todos</h1>

    <input
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={addTodo}
      value={inputValue}
      onKeyDown={addTodo}
    />
  </header>
);

export default TodoHeader;