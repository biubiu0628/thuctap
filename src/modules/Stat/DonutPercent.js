import React from "react";
import Chart from "react-apexcharts";

const Legend = ({ color, name, percent }) => (
  <div className="w-[200px] flex justify-between">
    <div className="flex items-center gap-1">
      <div
        className="size-[10px] rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <p className="font-pro text-[14px]">{name}</p>
    </div>
    <div className="font-proBold text-[16px]" style={{ color: color }}>
      {percent}%
    </div>
  </div>
);

const DonutPercent = () => {
  const series = [30, 70];
  const options = {
    labels: ["Đơn hoàn", "Đơn thành công"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF84A9", "#FFC719"],
    plotOptions: {
      pie: {
        donut: {
          size: "20%",
        },
      },
    },
  };

  return (
    <div className="app flex items-center justify-between pr-10 pb-4">
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height={220}
      />
      <div className="flex flex-col gap-2">
        {series.map((value, index) => (
          <Legend
            key={index}
            color={options.colors[index]}
            name={options.labels[index]}
            percent={value}
          />
        ))}
      </div>
    </div>
  );
};

export default DonutPercent;
