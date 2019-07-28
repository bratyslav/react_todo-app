import React from 'react';
import PropTypes from 'prop-types';

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

FilterButton.propTypes = {
  attribute: PropTypes.string.isRequired,
  setFilterAttribute: PropTypes.func.isRequired,
  filteredBy: PropTypes.string
};

export default FilterButton;