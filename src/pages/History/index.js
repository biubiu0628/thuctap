import React, { useState } from "react";
import Tag from "../../modules/Stat/Tag";
import BodyTable from "../../modules/History/BodyTable";

const History = () => {
  const [isActived, setIsActived] = useState(0);
  const handleActive = (index) => {
    setIsActived(index);
  };

  const tags = [{ name: "COD" }, { name: "Khối lượng" }];
  return (
    <div>
      <div className="flex gap-2 py-6 mt-10">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            name={tag.name}
            isActived={isActived === index}
            handleActive={() => handleActive(index)}
          />
        ))}
      </div>
      <div>
        <table className="w-full rounded-xl overflow-hidden">
          <thead className="bg-[#F7F7F7] ">
            <tr className="text-left text-[12px] font-proBold text-[#666666]">
              <th scope="col" className="text-center py-3">
                Thời gian
              </th>
              <th scope="col" className="text-center">
                Mã đơn hàng
              </th>
              <th scope="col" className="text-center w-[235px]">
                Giá trị cũ
              </th>
              <th scope="col" className="text-center w-[350px]">
                Giá trị mới
              </th>
              <th scope="col" className="text-left">
                Tác vụ
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <BodyTable key={index} isActived={isActived} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
