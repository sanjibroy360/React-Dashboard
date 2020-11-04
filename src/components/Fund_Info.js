import React from "react";

function FundInfo({ quantity, avgCost, investedAmmount }) {
  return (
    <div className="fund_info">
      <div>
        <p className="label">Quantity</p>
        <p>{quantity}</p>
      </div>
      <div>
        <p className="label">Avg. Cost</p>
        <p>{avgCost}</p>
      </div>
      <div>
        <p className="label">Invested Amt.</p>
        <p>$ {investedAmmount}</p>
      </div>
    </div>
  );
}

export default FundInfo;
