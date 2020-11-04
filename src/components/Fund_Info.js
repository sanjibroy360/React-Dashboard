import React from "react";

function FundInfo({ quantity, avgCost, investedAmmount }) {
  return (
    <div className="fund_info">
      <div>
        <p className="label">Quantity</p>
        <p>{quantity||0}</p>
      </div>
      <div>
        <p className="label">Avg. Cost</p>
        <p>{avgCost||0}</p>
      </div>
      <div>
        <p className="label">Invested Amt.</p>
        <p>$ {investedAmmount||0}</p>
      </div>
    </div>
  );
}

export default FundInfo;
