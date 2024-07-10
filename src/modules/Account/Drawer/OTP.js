import React, { useEffect, useRef, useState } from "react";
import Input from "../../../modules/OTP/Input";

const OTP = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const inputRefs = useRef([]);

  const handleOTPChange = (index, e) => {
    const newOTP = [...otp];

    if (!isNaN(e.target.value)) {
      newOTP[index] = e.target.value;
      setOTP(newOTP);

      if (e.target.value) {
        if (index < otp.length - 1) {
          inputRefs.current[index + 1].focus();
        }
      } else {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      }
    }
  };

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
    setOTP(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

  return (
    <div className="drawer drawer-end">
      <input id="otp" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-[208px] h-[53px]">
        <label
          htmlFor="otp"
          className="drawer-button w-full h-full flex 
          items-center justify-center border-[1px] 
          rounded-md border-[#F32034] text-[16px] 
          text-[#F32034] font-proBold cursor-pointer shadow"
        >
          Đổi mật khẩu
        </label>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="otp"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="h-screen bg-white w-1/4 rounded-l-xl">
          <div className="flex items-center px-10 border-b-[1px] h-[13%]">
            <p className="font-proBold text-[28px]">Nhập mã OTP</p>
          </div>
          <div className="h-[70%] flex flex-col justify-center gap-4 px-10">
            <p
              className="flex flex-col font-pro text-[18px] 
            text-[#666666] text-center px-8"
            >
              <span>
                Mã OTP đã được gửi về số điện thoại đuôi *6789 của bạn.
              </span>
              <span>Nhập mã 6 số để tiếp tục.</span>
            </p>
            <div className="flex flex-col w-full pt-8 gap-4">
              <div className="w-full flex justify-between">
                {otp.map((value, index) => (
                  <Input
                    key={index}
                    value={value}
                    ref={(el) => (inputRefs.current[index] = el)}
                    handleOTP={(e) => handleOTPChange(index, e)}
                  />
                ))}
              </div>
              <div className="flex justify-center">
                {seconds === 0 && minutes === 0 ? (
                  <button
                    className="font-proMedium text-[14px] text-[#F32034]"
                    onClick={resendOTP}
                  >
                    Gửi lại mã?
                  </button>
                ) : (
                  <p className="text-[#F32034] font-proBold text-[14px]">
                    {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </p>
                )}
              </div>
              <button
                className="uppercase h-[45px] flex items-center justify-center 
              bg-gradient-to-r from-[#EF586B] to-[#D9112A] w-full 
              rounded-md font-proBold text-[14px] text-white"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
