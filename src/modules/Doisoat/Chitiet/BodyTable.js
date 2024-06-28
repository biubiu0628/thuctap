import React from "react";

const Info = ({ nameInfo, text }) => (
  <p className="text-[13px]">
    <span className="font-pro">{nameInfo}</span>
    <span className="font-proBold">{text}</span>
  </p>
);

const Money = ({ price }) => (
  <th>
    <p className="font-pro text-[13px]">
      <span>{price} </span>
      <span className="underline">đ</span>
    </p>
  </th>
);

const moneys = [
  { price: "249.000" },
  { price: "0" },
  { price: "14.000" },
  { price: "0" },
  { price: "0" },
  { price: "0" },
  { price: "0" },
  { price: "0" },
];

const BodyTable = ({ stt }) => {
  return (
    <tr className="bg-white border-t-[1px]">
      <th scope="row" className="font-pro text-[14px]">
        {stt}
      </th>
      <th>
        <div className="flex flex-col gap-2 text-left py-2">
          <p className="text-[13px] flex flex-col">
            <span className="font-proBold text-[#F32034]">
              SGNS888888NT.812837011
            </span>
            <span className="font-pro italic">29-01-2024 08:41:01</span>
          </p>
          <p>
            <Info nameInfo="Mã Đơn KH: " text="S91773O3604509" />
            <Info nameInfo="KL: " text="10gr" />
            <Info nameInfo="Người trả phí: " text="Người gửi" />
          </p>
        </div>
      </th>
      <th>
        <div className="flex flex-col gap-2">
          <div
            className="rounded-full text-[8px] font-monoBold bg-[#27A568] 
            text-white flex justify-center items-center w-[120px] py-1"
          >
            Đã đối soát giao hàng
          </div>
          <p className="text-[13px] font-pro flex flex-col text-left">
            <span className="font-proBold">Nguyễn Trang</span>
            <span>214 Ngô Quyền, Phường 08, Quận 10, Hồ Chí Minh</span>
            <p>
              <span>Số điện thoại: </span>
              <span className="underline">085****536</span>
            </p>
          </p>
        </div>
      </th>
      {moneys.map((money, _) => (
        <Money price={money.price} />
      ))}
    </tr>
  );
};

export default BodyTable;
