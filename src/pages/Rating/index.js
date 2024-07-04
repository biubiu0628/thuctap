import React, { useState } from "react";
import Tag from "../../modules/Stat/Tag";
import BodyTable from "../../modules/Rating/BodyTable";

const Rating = () => {
  const [isActived, setIsActived] = useState(0);
  const handleActive = (index) => {
    setIsActived(index);
  };

  const tags = [{ name: "Người nhận" }, { name: "Người gửi" }];
  const ratings = [
    { name: "rating1" },
    { name: "rating2" },
    { name: "rating3" },
    { name: "rating4" },
    { name: "rating5" },
    { name: "rating6" },
    { name: "rating7" },
  ];
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
                Người đánh giá
              </th>
              <th scope="col" className="text-center w-[350px]">
                Nội dung
              </th>
              <th scope="col" className="text-center">
                Số sao
              </th>
              <th scope="col" className="text-center">
                Trạng thái
              </th>
            </tr>
          </thead>
          <tbody>
            {ratings.map((rating, index) => (
              <BodyTable key={index} name={rating.name} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rating;
