import React from "react";

function FilterBar({ selectedFilters, handleClick, clearFilter }) {
  return (
    <div
      className={`filters-bar ${
        selectedFilters.length === 0 && "filters-bar--hidden"
      }`}
    >
      <ul className="filters-list">
        {selectedFilters.map((filter, index) => (
          <li
            key={index}
            className="filters-list__item filters-list__item--clear"
          >
            {filter}
            <div onClick={clearFilter} className="btn--delete"></div>
          </li>
        ))}
      </ul>
      <button onClick={handleClick} className="btn">
        Clear
      </button>
    </div>
  );
}

export default FilterBar;
