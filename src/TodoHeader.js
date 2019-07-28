import React from 'react';
import PropTypes from 'prop-types';

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

TodoHeader.propTypes = {
  addTodo: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired
};

export default TodoHeader;