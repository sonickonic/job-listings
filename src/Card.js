import React from "react";

function Card({ data, handleClick }) {
  const filters = [
    data.role,
    data.level,
    ...(data.languages || []),
    ...(data.tools || []),
  ];

  return (
    <div className="card">
      <img src={data.logo} alt="logo" className="card__logo" />
      <div className="job-details">
        <span className="job-details__company-name">{data.company}</span>
        {data.new && <span className="job-details__label">new!</span>}
        {data.featured && (
          <span className="job-details__label job-details__label--dark">
            feature
          </span>
        )}
        <h3 className="job-details__job-title">{data.position}</h3>
        <ul className="job-details__info-list">
          <li className="job-details__info-item">{data.postedAt}</li>
          <li className="job-details__info-item job-details__info-item--bullet">
            {data.contract}
          </li>
          <li className="job-details__info-item job-details__info-item--bullet">
            {data.location}
          </li>
        </ul>
      </div>
      <ul className="filters-list">
        {filters.map((filter, index) => (
          <li onClick={handleClick} key={index} className="filters-list__item">
            {filter}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
