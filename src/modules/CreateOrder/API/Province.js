import React, { useEffect, useState } from "react";
import http from "../../../utils/http";

const Province = ({ setProvince, onSelect }) => {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await http.get("/v1/partner/areas/province");
        console.log(response);
        setProvinces(response.data.results);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin:", error);
      }
    };

    fetchProvinces();
  }, []);

  const handleProvince = (selectedProvince) => {
    setProvince(selectedProvince.name);
    onSelect();
  };

  return (
    <div>
      {provinces.map((prov) => (
        <button
          key={prov.code}
          onClick={() => handleProvince(prov)}
          className="group flex items-center p-3 
          gap-3 border-t-[1px] cursor-pointer w-full"
        >
          <div
            className="size-[20px] rounded-full border-[2px] 
            border-[#FBEFF2] group-hover:border-red-500"
          ></div>
          <p className="font-pro">{prov.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Province;
