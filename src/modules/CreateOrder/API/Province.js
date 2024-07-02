import React, { useEffect, useState } from "react";
import http from "../../../utils/http";
import removeTones from "../../../utils/removeTones";

const Province = ({ setProvince, onSelect, searchTerm }) => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(() => {
    const savedProvince = localStorage.getItem("selectedProvince");
    return savedProvince ? JSON.parse(savedProvince) : null;
  });

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
    setProvince({
      code: selectedProvince.code,
      name: selectedProvince.name,
    });
    localStorage.setItem("selectedProvince", JSON.stringify(selectedProvince));
    setSelectedProvince(selectedProvince);
    onSelect();
  };

  const filteredProvinces = provinces.filter((province) =>
    removeTones(province.name?.toLowerCase() || "").includes(
      removeTones(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      {filteredProvinces.map((prov) => (
        <button
          key={prov.code}
          onClick={() => handleProvince(prov)}
          className="group flex items-center p-3 
          gap-3 border-t-[1px] cursor-pointer w-full"
        >
          <input
            type="radio"
            name="province"
            className="accent-[#E40035] size-5"
            checked={selectedProvince && selectedProvince.code === prov.code}
            onChange={() => handleProvince(prov)}
          />
          <p className="font-pro">{prov.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Province;
