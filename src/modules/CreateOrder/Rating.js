import React from "react";

const Rating = ({ name }) => {
  return (
    <div className="rating">
      <input
        type="radio"
        name={name}
        className="mask mask-star bg-yellow-400"
      />
      <input
        type="radio"
        name={name}
        className="mask mask-star bg-yellow-400"
      />
      <input
        type="radio"
        name={name}
        className="mask mask-star bg-yellow-400"
      />
      <input
        type="radio"
        name={name}
        className="mask mask-star bg-yellow-400"
      />
      <input
        type="radio"
        name={name}
        className="mask mask-star bg-yellow-400"
      />
    </div>
  );
};

export default Rating;
