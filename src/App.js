import React, { useState } from "react";
import data from "./data.json";
import FilterBar from "./FilterBar";
import Card from "./Card";

function App() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  function addFilter(e) {
    const lowerCaseSelectedFilters = selectedFilters.map((word) =>
      word.toLowerCase()
    );

    if (!lowerCaseSelectedFilters.includes(e.target.innerText.toLowerCase())) {
      return setSelectedFilters([...selectedFilters, e.target.innerText]);
    }
  }

  function clearFilterBar() {
    return setSelectedFilters([]);
  }

  function clearFilter(e) {
    const item = e.target.parentNode.innerText;

    setSelectedFilters(selectedFilters.filter((filter) => filter !== item));
  }

  function matchfilter(data) {
    if (selectedFilters.length === 0) return true;

    const jobFilters = [
      ...(data.languages || []),
      ...(data.tools || []),
      data.level,
      data.role,
    ].map((filter) => filter.toLowerCase());
    return selectedFilters.every((selectedFilter) =>
      jobFilters.includes(selectedFilter.toLowerCase())
    );
  }

  return (
    <div>
      <header className="header"></header>
      <div className="main">
        <FilterBar
          clearFilter={clearFilter}
          handleClick={clearFilterBar}
          selectedFilters={selectedFilters}
        />
        <div className="main__container">
          {data
            .filter((data) => matchfilter(data))
            .map((data, id) => (
              <Card handleClick={addFilter} key={id} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
