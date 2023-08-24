import React from "react";
import BieChart from "./BieChart";
import LineChart from "./LineChart";
import AreaCharts from "./AreaChart";
import SimpleBarChart from "./SimpleBarChart";
const Chart = () => {
  return (
    <div className="all_box">
      <BieChart />
      <LineChart />
      <AreaCharts />
      <SimpleBarChart />
    </div>
  );
};

export default Chart;
