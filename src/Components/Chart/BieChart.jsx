import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./style.css";
import { Doughnut } from "react-chartjs-2";
var data = {
  labels: ["Red", "Blue", "Yellow", "ffvf", "fvhfh"],
  // chart?.coins?.map(x => x.name),
  datasets: [
    {
      label: "My First Dataset",
      data: [88, 50, 100, 90, 33],
      backgroundColor: [
        "rgb(30 23 124)",
        "#D2001A",
        "#F6C90E",
        "rgba(239, 87, 11, 0.932)",
        "#3E7C17",
      ],
      borderColor: [
        "rgb(30 23 124)",
        "#D2001A",
        "#F6C90E",
        "rgba(239, 87, 11, 0.932)",
        "#3E7C17",
      ],
      borderWidth: 1,
    },
  ],
};
ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
  maintainAspectRatio: true,
  responsive: true,
  scales: {},
  legend: {
    labels: {
      fontSize: 25,
     },
   },
};
const BieChart = () => {
  return (
    <div className="box_chart">
      <Doughnut total={"550"} data={data} height={400} options={options} />
    </div>
  );
};

export default BieChart;
