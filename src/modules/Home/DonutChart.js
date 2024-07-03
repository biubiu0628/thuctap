import React from "react";
import Chart from "react-apexcharts";

const Legend = ({ color, text, number }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <div
          className="size-[10px] rounded-full mr-2"
          style={{ backgroundColor: color }}
        ></div>
        <p className="mr-4">{text}</p>
      </div>
      <p style={{ color: color }}>{number}</p>
    </div>
  );
};

const DonutChart = () => {
  const series = [66, 12, 11, 30, 2, 1, 5, 6, 26, 3, 13, 0, 0, 0];
  const options = {
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
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
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
    <div className="app flex items-center justify-between pt-6">
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height={220}
      />
      <div className="flex gap-20 pr-8">
        <div>{legends1}</div>
        <div>{legends2}</div>
      </div>
    </div>
  );
};

export default DonutChart;
