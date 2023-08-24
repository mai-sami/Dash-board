import React from "react";
import BieChart from "./BieChart";
import LineChart from "./LineChart";
import AreaCharts from "./AreaChart";
import SimpleBarChart from "./SimpleBarChart";
import SpecifiedDomainRadarChart from "./SpecifiedDomainRadarChart";
import JointLineScatterChart from "./JointLineScatterChart";
const Chart = () => {
  return (
    <div className="all_box">
      <BieChart />
      <LineChart />
      <AreaCharts />
      <SimpleBarChart />
      <SpecifiedDomainRadarChart />
      <JointLineScatterChart />
    </div>
  );
};

export default Chart;
