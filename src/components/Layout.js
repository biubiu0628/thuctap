import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-[15%_85%] bg-[#F2F2F2] min-h-screen">
      <div>
        <Nav />
      </div>
      <div className="px-10 pt-6">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
