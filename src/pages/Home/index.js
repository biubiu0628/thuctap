import React from "react";
import Right from "../../images/Home/right.svg";
import Right2 from "../../images/Home/right2.svg";
import Left from "../../images/Home/left.svg";
import Image1 from "../../images/Home/image1.svg";
import Image2 from "../../images/Home/image2.svg";
import Image3 from "../../images/Home/image3.svg";
import Image4 from "../../images/Home/image4.svg";
import AppStore from "../../images/Home/appstore.svg";
import GooglePlay from "../../images/Home/googleplay.svg";
import DonutChart from "../../modules/Home/DonutChart";

const TableLeft = ({ name, children }) => (
  <div className="bg-white rounded-2xl pt-4">
    <div
      className="flex justify-between px-8 
            pb-4 border-b-[1px] border-[#E5E5E5]"
    >
      <p className="text-[18px] font-proBold">{name}</p>
      <button
        className="size-[33px] flex justify-center 
            items-center rounded-full bg-white shadow"
      >
        <img src={Right} alt="" />
      </button>
    </div>
    {children}
  </div>
);

const TableRight = ({ name, text, image1, image2 }) => (
  <div className="bg-white rounded-2xl pt-4">
    <div
      className="flex justify-between items-start px-8 
    pb-4 border-b-[1px] border-[#E5E5E5]"
    >
      <p className="flex flex-col">
        <span className="text-[18px] font-proBold">{name}</span>
        <span className="text-[12px] font-pro">{text}</span>
      </p>
      <div className="flex gap-5">
        <button>
          <img src={Left} alt="" className="w-[8px] h-[16px]" />
        </button>
        <button>
          <img src={Right2} alt="" className="w-[8px] h-[16px]" />
        </button>
      </div>
    </div>
    <div className="flex px-8 gap-6 py-6">
      <img src={image1} alt="" />
      <div className="relative flex">
        <img src={image2} alt="" />
        <div
          className="absolute right-0 h-full w-[30px] bg-gradient-to-r 
          from-[#F2F2F200] via-[#F2F2F2A5] to-[#F2F2F2]"
        ></div>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="grid grid-cols-[69%_30%] gap-4 pt-10">
      <div className="flex flex-col gap-4">
        <TableLeft
          name="Thống kê"
          children={
            <div className="h-[350px]">
              <p className="flex justify-between items-center px-8 pt-4">
                <span className="text-[18px] font-proBold">
                  Tỷ lệ giao hàng
                </span>
                <span className="text-[14px] font-pro">Tháng 10 năm 2023</span>
              </p>
              <DonutChart />
            </div>
          }
        />
        <TableLeft name="Dòng tiền" />
      </div>
      <div className="flex flex-col gap-4">
        <TableRight
          name="Ưu đãi hàng tháng"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print."
          image1={Image1}
          image2={Image2}
        />
        <TableRight
          name="Tin tức và Báo chí"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print."
          image1={Image3}
          image2={Image4}
        />
        <div className="bg-white rounded-2xl pt-4">
          <div className="flex flex-col justify-between items-start px-8 pb-4">
            <p className="flex flex-col pb-6">
              <span className="text-[18px] font-proBold">Ứng dụng</span>
              <span className="text-[12px] font-pro">
                Tải ngay ứng dụng SuperShip trên App Store và Google Play
              </span>
            </p>
            <div className="flex gap-4">
              <button>
                <img src={AppStore} alt="" />
              </button>
              <button>
                <img src={GooglePlay} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
