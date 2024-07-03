import React, { useEffect, useState } from "react";
import http from "../../../utils/http";
import removeTones from "../../../utils/removeTones";

const District = ({
  setDistrict,
  provinceCode,
  onSelect,
  searchTerm,
  districtRef,
  scrollCommune,
}) => {
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(() => {
    const savedDistrict = localStorage.getItem("selectedDistrict");
    return savedDistrict ? JSON.parse(savedDistrict) : null;
  });

  useEffect(() => {
    const fetchDistrict = async () => {
      try {
        const response = await http.get(
          `/v1/partner/areas/district?province=${provinceCode}`
        );
        console.log(response);
        setDistricts(response.data.results);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin:", error);
      }
    };

    if (provinceCode) {
      fetchDistrict();
    }
  }, [provinceCode]);

  const handleDistrict = (selectedDistrict) => {
    setDistrict({
      code: selectedDistrict.code,
      name: selectedDistrict.name,
    });
    localStorage.setItem("selectedDistrict", JSON.stringify(selectedDistrict));
    setSelectedDistrict(selectedDistrict);
    onSelect();
    setTimeout(() => {
      scrollCommune();
    }, 300);
  };

  const filteredDistricts = districts.filter((district) =>
    removeTones(district.name?.toLowerCase() || "").includes(
      removeTones(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      {filteredDistricts.map((dis) => (
        <button
          key={dis.code}
          onClick={() => handleDistrict(dis)}
          className="group flex items-center p-3 
          gap-3 border-t-[1px] cursor-pointer w-full"
          ref={
            selectedDistrict && selectedDistrict.code === dis.code
              ? districtRef
              : null
          }
        >
          <input
            type="radio"
            name="district"
            className="accent-[#E40035] size-5"
            checked={selectedDistrict && selectedDistrict.code === dis.code}
            onChange={() => handleDistrict(dis)}
          />
          <p className="font-pro">{dis.name}</p>
        </button>
      ))}
    </div>
  );
};

export default District;
