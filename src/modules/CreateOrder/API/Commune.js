import React, { useEffect, useState } from "react";
import http from "../../../utils/http";
import removeTones from "../../../utils/removeTones";

const Commune = ({ setCommune, districtCode, searchTerm, communeRef }) => {
  const [communes, setCommunes] = useState([]);
  const [selectedCommune, setSelectedCommune] = useState(() => {
    const savedCommune = localStorage.getItem("selectedCommune");
    return savedCommune ? JSON.parse(savedCommune) : null;
  });

  useEffect(() => {
    const fetchCommune = async () => {
      try {
        const response = await http.get(
          `/v1/partner/areas/commune?district=${districtCode}`
        );
        console.log(response);
        if (response.data.results.length === 0) {
          document.getElementById("area-modal").close();
        }
        setCommunes(response.data.results);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin:", error);
      }
    };

    if (districtCode) {
      fetchCommune();
    }
  }, [districtCode]);

  const handleCommune = (selectedCommune) => {
    setCommune({ name: selectedCommune.name, code: selectedCommune.code });
    localStorage.setItem("selectedCommune", JSON.stringify(selectedCommune));
    setSelectedCommune(selectedCommune);
  };

  const filteredCommunes = communes.filter((commune) =>
    removeTones(commune.name?.toLowerCase() || "").includes(
      removeTones(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      {filteredCommunes.map((com) => (
        <button
          key={com.code}
          onClick={() => handleCommune(com)}
          className="group flex items-center p-3 
          gap-3 border-t-[1px] cursor-pointer w-full"
          ref={
            selectedCommune && selectedCommune.code === com.code
              ? communeRef
              : null
          }
        >
          <input
            type="radio"
            name="commune"
            className="accent-[#E40035] size-5"
            checked={selectedCommune && selectedCommune.code === com.code}
            onChange={() => handleCommune(com)}
          />
          <p className="font-pro">{com.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Commune;
