import React from "react";

const Table = ({ name, date, childchart, children }) => {
  return (
    <div>
      <div className="px-8 py-4">
        <div>
          <p className="flex justify-between">
            <span className="font-proBold text-[18px]">{name}</span>
            <span className="font-pro text-[14px] text-[#666666]">{date}</span>
          </p>
          <div>{childchart}</div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Table;
