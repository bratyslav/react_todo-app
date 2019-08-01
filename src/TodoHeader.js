import React from 'react';
import PropTypes from 'prop-types';

const TodoHeader = ({ addTodo, setInputValue, inputValue }) => (
  <header className="header">
    <h1>todos</h1>
    <form onSubmit={addTodo}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={setInputValue}
        value={inputValue}
      />
    </form>
  </header>
);

TodoHeader.propTypes = {
  addTodo: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired
};

export default TodoHeader;