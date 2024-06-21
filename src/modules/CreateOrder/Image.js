import React from "react";

const Image = ({ image }) => {
  return (
    <div className="w-[100px] h-[86px] rounded">
      <img src={image} alt="" />
    </div>
  );
};

export default Image;
