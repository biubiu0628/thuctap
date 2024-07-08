import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Component/Logo.svg";
import Image from "../images/Component/Image.svg";
import Input from "../modules/OTP/Input";

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
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col items-center justify-between py-20">
        <img src={Logo} alt="Logo" />
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="font-proBold text-[44px]">Nhập mã OTP</p>
            <p className="flex flex-col font-pro text-[18px] text-[#666666]">
              <span>
                Mã OTP đã được gửi về số điện thoại đuôi *6789 của bạn.
              </span>
              <span>Nhập mã 6 số để tiếp tục.</span>
            </p>
          </div>
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
            <Link
              to="/changepass"
              className="uppercase h-[45px] flex items-center justify-center 
              bg-gradient-to-r from-[#EF586B] to-[#D9112A] w-full 
              rounded-md font-proBold text-[14px] text-white"
            >
              Xác nhận
            </Link>
          </div>
        </div>
        <div className="font-pro text-[12px] text-[#B3B3B3]">
          2023 © SuperShip
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default OTP;
