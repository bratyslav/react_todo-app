import React from 'react';
import PropTypes from 'prop-types';
const classNames = require('classnames');

const FilterButton = ({ attribute, setFilterAttribute, filteredBy }) => {
  const fiterButtonClass = classNames({
    'filter-button-checked': filteredBy === attribute,
    '': filteredBy !== attribute
  });

  return (
    <li
      className={fiterButtonClass}
    >
      <a onClick={() => setFilterAttribute(attribute)}>
        {attribute}
      </a>
    </li>
  );

};

FilterButton.propTypes = {
  attribute: PropTypes.string.isRequired,
  setFilterAttribute: PropTypes.func.isRequired,
  filteredBy: PropTypes.string
};

export default FilterButton;