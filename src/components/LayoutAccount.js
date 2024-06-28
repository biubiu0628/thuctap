import React from "react";
import NavAccount from "../components/NavAccount";
import Header from "../components/Header";

function LayoutAccount({ children }) {
  return (
    <div className="grid grid-cols-[15%_85%] bg-[#F2F2F2] min-h-screen">
      <div>
        <NavAccount />
      </div>
      <div className="px-10 pt-6">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default LayoutAccount;
