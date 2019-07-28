import React from 'react';

const FilterButton = ({ attribute, setFilterAttribute, filteredBy }) => (
  <li
    className={filteredBy === attribute
      ? "filter-button-checked"
      : ""
    }
  >
    <a onClick={() => setFilterAttribute(attribute)}>
      {attribute}
    </a>
  </li>
);

export default FilterButton;