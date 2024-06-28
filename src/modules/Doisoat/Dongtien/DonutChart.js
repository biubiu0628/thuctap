import React from "react";
import Chart from "react-apexcharts";

const Legend = ({ color, name, money }) => (
  <div className="flex justify-between gap-20">
    <div className="flex items-center gap-1">
      <div
        className="size-[8px] rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <p className="font-pro text-[14px]">{name}</p>
    </div>
    <p className="flex gap-1">
      <span className="font-proBold text-[16px]">{money}.000</span>
      <span className="font-pro text-[12px]">đ</span>
    </p>
  </div>
);

const DonutChart = () => {
  const series = [66, 10, 1666];
  const options = {
    labels: ["Chưa đối soát", "Đã đối soát", "Đã trả"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF849E", "#FFC91F", "#F32034"],
    plotOptions: {
      pie: {
        donut: {
          size: "40%",
        },
      },
    },
  };

  const legends = series.map((value, index) => (
    <Legend
      key={index}
      name={options.labels[index]}
      money={value.toLocaleString("vi-VN")}
      color={options.colors[index]}
    />
  ));

  return (
    <div className="app flex items-center justify-between py-4">
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height={220}
      />
      <div className="flex flex-col gap-4 p-4">{legends}</div>
    </div>
  );
};

export default DonutChart;
