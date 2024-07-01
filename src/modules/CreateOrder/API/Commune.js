import React, { useEffect, useState } from "react";
import http from "../../../utils/http";

const Commune = ({ setCommune }) => {
  const [communes, setCommunes] = useState([]);

  useEffect(() => {
    const fetchDistrict = async () => {
      try {
        const response = await http.get("/v1/partner/areas/commune");
        console.log(response);
        setCommunes(response.data.results);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin:", error);
      }
    };

    fetchDistrict();
  }, []);

  const handleCommune = (selectedCommune) => {
    setCommune(selectedCommune.name);
  };

  return (
    <div>
      {communes.map((com) => (
        <button
          key={com.code}
          onClick={() => handleCommune(com)}
          className="group flex items-center p-3 
          gap-3 border-t-[1px] cursor-pointer w-full"
        >
          <div
            className="size-[20px] rounded-full border-[2px] 
            border-[#FBEFF2] group-hover:border-red-500"
          ></div>
          <p className="font-pro">{com.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Commune;
