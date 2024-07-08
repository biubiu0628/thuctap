import React from "react";

const Input = React.forwardRef(({ value, handleOTP }, ref) => {
  return (
    <div className="w-[48px] h-[48px]">
      <input
        type="text"
        pattern="[0-9]*"
        maxLength={1}
        value={value}
        onChange={handleOTP}
        ref={ref}
        className="w-full h-full text-center bg-[#F2F2F2] 
        rounded-md font-pro text-[16px] text-[#666666]"
      />
    </div>
  );
});

export default Input;
