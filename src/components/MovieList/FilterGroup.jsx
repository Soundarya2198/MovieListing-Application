import React from "react";

const FilterGroup = ({ minrating, onRateingClick, rate }) => {
  return (
    <ul className="movie_filter">
      {rate.map((rate) => (
        <li
          className={
            minrating == rate ? "movie_filter_item active" : "movie_filter_item"
          }
          key={rate}
          onClick={() => onRateingClick(rate)}
        >
          {rate}+ star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
