import React from "react";
import Chart from "react-apexcharts";

const DonutPercent = () => {
  const series = [30, 70];
  const options = {
    labels: ["Đơn hoàn", "Đơn thành công"],
    legend: {
      show: true,
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
    <div className="app flex flex-col">
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height={220}
      />
    </div>
  );
};

export default DonutPercent;
