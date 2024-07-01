import React, { useEffect, useState } from "react";
import http from "../../../utils/http";

const District = ({ setDistrict }) => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    const fetchDistrict = async () => {
      try {
        const response = await http.get("/v1/partner/areas/district");
        console.log(response);
        setDistricts(response.data.results);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin:", error);
      }
    };

    fetchDistrict();
  }, []);

  const handleDistrict = (selectedDistrict) => {
    setDistrict(selectedDistrict.name);
  };

  return (
    <div>
      {districts.map((dis) => (
        <button
          key={dis.code}
          onClick={() => handleDistrict(dis)}
          className="group flex items-center p-3 
          gap-3 border-t-[1px] cursor-pointer w-full"
        >
          <div
            className="size-[20px] rounded-full border-[2px] 
            border-[#FBEFF2] group-hover:border-red-500"
          ></div>
          <p className="font-pro">{dis.name}</p>
        </button>
      ))}
    </div>
  );
};

export default District;
