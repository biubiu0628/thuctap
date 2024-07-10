import React from "react";
import CreditCard from "../../modules/Bank/CreditCard";
import Add from "../../modules/Bank/Add";

const Bank = () => {
  return (
    <div className="grid grid-cols-2 pt-10 gap-4 w-[820px]">
      <CreditCard bank="techcombank" />
      <CreditCard bank="vietcombank" />
      <CreditCard bank="vietcombank" />
      <Add />
    </div>
  );
};

export default Bank;
