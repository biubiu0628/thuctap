import React from "react";

const BodyTable = ({ color, name, children, fee, price }) => {
  return (
    <tbody>
      <tr style={{ backgroundColor: color }}>
        <th scope="row" className="py-4 pl-4">
          <div className="flex items-center gap-3">
            <p className="font-proBold text-[14px]">{name}</p>
            {children}
          </div>
        </th>
        <td>
          <p className="font-pro text-[14px] text-right">
            <span>{fee} </span>
            <span className="underline">đ</span>
          </p>
        </td>
        <td>
          <p className="font-pro text-[14px] text-right pr-4">
            <span>{price} </span>
            <span className="underline">đ</span>
          </p>
        </td>
      </tr>
    </tbody>
  );
};

export default BodyTable;
