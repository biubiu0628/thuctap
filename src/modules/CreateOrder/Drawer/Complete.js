import React from "react";
import Add from "../../../images/Create/Add.svg";
import Add2 from "../../../images/Create/Add2.svg";
import Presence from "../../../images/Create/Presence.svg";
import Read from "../../../images/Create/Read.svg";
import Print from "../../../images/Create/Print.svg";

const Button = ({ image, text }) => (
  <button
    className="flex items-center justify-center 
    gap-2 py-4 shadow rounded-lg"
  >
    <img src={image} alt="" />
    <p className="uppercase text-[14px] font-proBold">{text}</p>
  </button>
);

const Complete = ({ isRules }) => {
  return (
    <div className="drawer drawer-end">
      <input id="complete" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="complete"
          className={`uppercase gap-2 font-proBold text-[14px] h-[53px] 
            rounded-lg flex items-center justify-center ${
              isRules
                ? "bg-white shadow cursor-pointer"
                : "text-[#B2B2B2] border-[1px] border-[#E5E5E5] disabled cursor-auto"
            }`}
          onClick={(e) => {
            if (!isRules) {
              e.preventDefault();
            }
          }}
        >
          <img src={isRules ? Add2 : Add} alt="" />
          Tạo đơn
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="complete"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="h-screen bg-white w-1/4 rounded-l-xl">
          <div className="flex items-center px-10 border-b-[1px] h-[13%]">
            <p className="font-proBold text-[28px]">Tạo đơn hàng thành công</p>
          </div>
          <div className="h-[70%] flex flex-col justify-center gap-8 px-10">
            <div className="flex gap-2">
              <img src={Presence} alt="" />
              <p>
                <span>Đơn hàng </span>
                <span>SGN1718182397123 </span>
                <span>
                  đã được tiếp nhận và sẽ được giao sớm nhất đến Người nhận hàng
                </span>
              </p>
            </div>
            <div>
              <ul className="timeline timeline-vertical">
                <li>
                  <div className="timeline-middle">
                    <input
                      type="radio"
                      name="timeline"
                      className="accent-[#F32034] size-5"
                    />
                  </div>
                  <div className="timeline-end timeline-box">
                    <p className="flex flex-col">
                      <span className="text-[12px] font-pro">
                        05/08/2023 - 07:51
                      </span>
                      <p className="flex flex-col text-[#F32034]">
                        <span className="text-[14px] font-proBold">
                          Chờ lấy hàng
                        </span>
                        <span className="text-[14px] font-pro">
                          Q.Tân Bình, Thành phố Hồ Chí Minh
                        </span>
                      </p>
                    </p>
                  </div>
                  <hr />
                </li>
                <li>
                  <div className="timeline-middle">
                    <input
                      type="radio"
                      name="timeline"
                      className="accent-[#F32034] size-5"
                    />
                  </div>
                  <div className="timeline-start timeline-box ">
                    <p className="flex flex-col">
                      <span className="text-[12px] font-pro">
                        05/08/2023 - 07:51
                      </span>
                      <p className="flex flex-col text-[#F32034]">
                        <span className="text-[14px] font-proBold">
                          Chờ duyệt
                        </span>
                        <span className="text-[14px] font-pro">
                          Q.Tân Bình, Thành phố Hồ Chí Minh
                        </span>
                      </p>
                    </p>
                  </div>
                  <hr />
                </li>
                <li>
                  <div className="timeline-middle">
                    <input
                      type="radio"
                      name="timeline"
                      className="accent-[#F32034] size-5"
                    />
                  </div>
                  <div className="timeline-end timeline-box">
                    <p className="flex flex-col">
                      <span className="text-[12px] font-pro">
                        05/08/2023 - 07:51
                      </span>
                      <p className="flex flex-col text-[#F32034]">
                        <span className="text-[14px] font-proBold">
                          Chờ lấy hàng
                        </span>
                        <span className="text-[14px] font-pro">
                          Q.Tân Bình, Thành phố Hồ Chí Minh
                        </span>
                      </p>
                    </p>
                  </div>
                  <hr />
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Button image={Read} text="Xem đơn" />
                <Button image={Print} text="In đơn" />
              </div>
              <button
                className="uppercase w-full py-4 bg-gradient-to-b from-[#EF586B] 
              to-[#D9112A] font-proMedium text-[14px] text-white rounded-lg"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
