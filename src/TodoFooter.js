import React from 'react';
import FilterButton from './FIlterButton';
import PropTypes from 'prop-types';
const classNames = require('classnames');

const TodoFooter = ({
  todos,
  setFilterAttribute,
  deleteAllCompleted,
  filteredBy
}) => {
  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  const footerClass = classNames({
    'no-visible': todos.length === 0,
    'footer': todos.length !== 0
  });

  const deleteAllCompletedButtonClass = classNames({
    'clear-completed': todos.find(todo => todo.completed),
    'no-visible': !todos.find(todo => todo.completed)
  });

  return (
    <footer
      className={footerClass}
    >
      <span className="todo-count">
        {activeTodosCount === 0
          ? 'All done'
          : activeTodosCount + ' items left'
        }
      </span>

      <ul className="filters">
        {
          ['all', 'active', 'completed'].map(attribute => (
            <FilterButton
              setFilterAttribute={setFilterAttribute}
              filteredBy={filteredBy}
              attribute={attribute}
              key={attribute}
            />
          ))
        }
      </ul>

      <button
        type="button"
        className={deleteAllCompletedButtonClass}
        onClick={deleteAllCompleted}  
      >
        Clear completed
      </button> 
    </footer>
  );
};

TodoFooter.propTypes = {
  todos: PropTypes.array.isRequired,
  setFilterAttribute: PropTypes.func.isRequired,
  deleteAllCompleted: PropTypes.func.isRequired,
  filteredBy: PropTypes.string
};

export default TodoFooter;