import React from 'react';
import FilterButton from './FIlterButton';

const TodoFooter = ({
  todos,
  setFilterAttribute,
  deleteAllCompleted,
  filteredBy
}) => {
  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  return (
    <footer
      className={todos.length === 0 ? "no-visible" : "footer"}
    >
      <span className="todo-count">
        {activeTodosCount === 0
          ? 'All done'
          : activeTodosCount + ' items left'
        }
      </span>

      <ul className="filters">
        <FilterButton
          setFilterAttribute={setFilterAttribute}
          filteredBy={filteredBy}
          attribute={'all'}
        />
        <FilterButton
          setFilterAttribute={setFilterAttribute}
          filteredBy={filteredBy}
          attribute={'active'}
        />
        <FilterButton
          setFilterAttribute={setFilterAttribute}
          filteredBy={filteredBy}
          attribute={'completed'}
        />
      </ul>

      <button
        type="button"
        className={todos.find(todo => todo.completed)
          ? "clear-completed"
          : "no-visible"
        }
        onClick={deleteAllCompleted}  
      >
        Clear completed
      </button> 
    </footer>
  );
};

export default TodoFooter;