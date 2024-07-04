import React from "react";
import Chart from "react-apexcharts";

const Legend = ({ color, text, number }) => (
  <div className="w-[200px] flex items-center justify-between py-1">
    <div className="flex items-center gap-1">
      <div
        className="size-[10px] rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <p className="font-pro text-[14px]">{text}</p>
    </div>
    <p className="font-proBold text-[16px]" style={{ color: color }}>
      {number}
    </p>
  </div>
);

const DonutStatus = () => {
  const series = [66, 12, 11, 30, 2, 1, 5, 6, 26, 3, 13, 0, 0, 0];
  const options = {
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    labels: [
      "Đang giao",
      "Chờ lấy",
      "Đã lấy",
      "Giao thành công",
      "Hoãn giao",
      "Không giao được",
      "Chờ xử lý",
      "Đã duyệt hoàn",
      "Đã trả",
      "Đã hủy",
      "Đang duyệt hoàn",
      "Phát tiếp",
      "Lưu kho",
      "Giao 1 phần",
    ],
    colors: [
      "#ED6E05",
      "#F7A200",
      "#FFD101",
      "#E4DF01",
      "#A1DC80",
      "#5EB131",
      "#008856",
      "#06567F",
      "#039EED",
      "#752AB7",
      "#B30F7F",
      "#FC1882",
      "#F76CAD",
      "#E62812",
    ],
    plotOptions: {
      pie: {
        donut: {
          size: "20%",
        },
      },
    },
  };

  const legends1 = series
    .slice(0, 7)
    .map((value, index) => (
      <Legend
        key={index}
        color={options.colors[index]}
        text={options.labels[index]}
        number={value}
      />
    ));

  const legends2 = series
    .slice(7)
    .map((value, index) => (
      <Legend
        key={index + 7}
        color={options.colors[index + 7]}
        text={options.labels[index + 7]}
        number={value}
      />
    ));

  return (
    <div className="app flex pb-4">
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height={220}
      />
      <div className="flex w-full justify-between pr-10 pl-20">
        <div>{legends1}</div>
        <div>{legends2}</div>
      </div>
    </div>
  );
};

export default DonutStatus;
