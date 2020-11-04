import React from "react";
import DonutChart from "react-donut-chart";
import { useSelector } from "react-redux";

function DoughnutChart() {
  let state = useSelector((state) => state);
  let data = [
    { value: 27.38, label: "ETFs" },
    { value: 72.62, label: "Mutual Funds" },
  ];
  let colors = ["#ac9746", "#60badc"];

  return (
    <>
      {state.isLoading ? (
        <></>
      ) : (
        <div className="portfolio">
          <div>
            <p>Portfolio</p>
            <div>
              <select>
                <option value="Asset-wise">Asset-wise</option>
              </select>
            </div>
          </div>
          <div className="doughnut">
            <DonutChart data={data} colors={colors} width={418} height={300} />
          </div>
        </div>
      )}
    </>
  );
}

export default DoughnutChart;
