import React from "react";
import Chart from "react-apexcharts";

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
      show: true,
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

export default DonutChart;
