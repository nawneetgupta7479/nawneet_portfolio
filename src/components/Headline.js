
import React from "react";

const Headline = ({ title }) => {
  return (
    <div className="text-center  relative font-mont">
      {/* Outline text */}
      <h1 className="text-7xl font-bold text-transparent outline-text stroke-[1px] absolute inset-0">
        {title.toUpperCase()}
      </h1>
      {/* Solid text */}
      <h1 className="text-5xl font-bold text-dark relative dark:text-light top-10">
        {title.toUpperCase()}
      </h1>
    </div>
  );
};

export default Headline;
