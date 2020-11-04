import React from "react";
import Cards from "../components/Cards";
import DoughnutChart from "../components/DoughnutChart";
import { useSelector } from "react-redux";

function Dashboard() {
  let state = useSelector((state) => state);

  return (
    <>
      <div className="container">
        {state.error ? (
          <p className="error_msg">{state.error}</p>
        ) : (
          <div className="dashboard">
            <Cards />
            <DoughnutChart />
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
