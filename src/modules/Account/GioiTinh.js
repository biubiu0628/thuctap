import React from "react";

const GioiTinh = () => {
  return (
    <div
      className="dropdown-content menu absolute grid grid-rows-2 gap-4 p-4 
    bg-white border-[1px] rounded-xl w-[247px] left-0 top-16"
    >
      <button className="hover:bg-black hover:text-white py-2 rounded-xl">
        Nam
      </button>
      <button className="hover:bg-black hover:text-white rounded-xl ">
        Nữ
      </button>
    </div>
  );
};

export default GioiTinh;
