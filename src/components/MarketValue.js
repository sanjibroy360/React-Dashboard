import React from "react";

function MarketValue({
  market_value,
  investedAmmount,
  unrealized_p_and_l,
  percentage_of_portfolio_value,
}) {
  return (
    <div className="market_value">
      <div className="values">
        <div>
          <p className="label">Market value </p>
          <p>${(investedAmmount + unrealized_p_and_l).toFixed(3)}</p>
        </div>

        <div>
          <p className="label">% of portfolio value</p>
          <p>{percentage_of_portfolio_value.toFixed(3)}%</p>
        </div>
      </div>
      <div className="progress_bar_wrapper">
        <div
          className="progress_bar profit"
          style={{ width: `${percentage_of_portfolio_value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default MarketValue;
