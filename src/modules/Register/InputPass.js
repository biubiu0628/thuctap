import React from "react";
import Lock from "../../images/Component/Lock.svg";
import Eye from "../../images/Component/Eye.svg";

const InputPass = ({
  id,
  text,
  isShowPass,
  setIsShowPass,
  isInput,
  setIsInput,
}) => {
  const handleShow = () => {
    setIsShowPass(!isShowPass);
  };

  const handleInput = (e) => {
    if (e.target.value.trim() !== "") {
      setIsInput(true);
    } else {
      setIsInput(false);
    }
  };

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`flex items-center gap-2 border-[1px] ${
          isInput ? "border-[#005FCC]" : ""
        } h-[50px] rounded-lg px-3 w-full`}
      >
        <div className="size-[20px] flex items-center justify-center">
          <img src={Lock} alt="" />
        </div>
        <input
          type={isShowPass ? "text" : "password"}
          id={id}
          placeholder={`${text} *`}
          onChange={handleInput}
          className="focus:outline-none w-full font-pro text-[16px]"
          required
        />
        <button onClick={handleShow}>
          <img src={Eye} alt="" />
        </button>
      </label>
      <div
        className={`absolute top-[-15px] px-2 h-[16px] bg-white 
        left-4 text-center ${isInput ? "block" : "hidden"}`}
      >
        <p>
          <span className="text-[#005FCC] text-[12px] font-pro">{text}</span>
          <span className="text-[#F32034] text-[12px] font-pro"> *</span>
        </p>
      </div>
    </div>
  );
};

export default InputPass;
