import React from "react";

const CheckBox = ({ name, isCheck, handleCheck }) => {
  return (
    <div className="flex items-center gap-2 py-1">
      <input
        type="checkbox"
        className="size-[16px] accent-[#F32034]"
        checked={isCheck}
        onChange={handleCheck}
      />
      <p
        className={`${
          isCheck ? "text-black" : "text-[#666666]"
        } font-proMedium text-[14px]`}
      >
        {name}
      </p>
    </div>
  );
};

export default CheckBox;
