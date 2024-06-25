import React from "react";
import Chart from "react-apexcharts";

const DonutMoney = () => {
  const series = [66, 15, 32];
  const options = {
    labels: ["Tổng đơn", "Tổng thu hộ", "Tổng cước phí"],
    legend: {
      show: true,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF84A9", "#FFC719", "#E90C21"],
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

export default DonutMoney;
