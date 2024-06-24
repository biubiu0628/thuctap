import React from "react";
import Dismiss from "../images/Header/Dismiss.svg";

const Button = ({ image, text, children }) => (
  <div className="w-[300px] h-[40px]"></div>
);

const Filter = () => {
  return (
    <div className="flex justify-end">
      <div className="h-screen w-[400px] rounded-l-2xl bg-white">
        <div className="flex justify-between border-b-[1px] px-6">
          <p>Bộ lọc đơn hàng</p>
          <button>
            <img src={Dismiss} alt="" />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Filter;
