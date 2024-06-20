import React from "react";
import Chart from "react-apexcharts";

const FunnelChart = () => {
  const series = [
    {
      name: "Số lượng",
      data: [66, 50, 40, 30, 20, 10],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        distributed: true,
        dataLabels: {
          position: "bottom",
        },
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      offsetX: 0,
      dropShadow: {
        enabled: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: [
        "Dự kiến thu",
        "Đã thu tiền",
        "Đã ch.khoản",
        "Giai đoạn 4",
        "Giai đoạn 5",
        "Giai đoạn 6",
      ],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  return (
    <div className="app flex flex-col">
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height={350}
      />
    </div>
  );
};

export default FunnelChart;
