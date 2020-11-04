import React from "react";
import FundInfo from "./Fund_Info";
import MarketValue from "./MarketValue";
import Price from "./Price";
import UnrealizedPAndL from "./UnrealizedPAndL";
import Buttons from "./Buttons";

function Card({ fund }) {
  let {
    scrip,
    quantity,
    price_in_dollar,
    avg_cost_in_dollar,
    invested_ammount_in_dollar,
    percentage_of_portfolio_value,
    unrealized_p_and_l,
    return_percentage,
  } = fund;
  return (
    <div className="card">
      <Price price={price_in_dollar} scrip={scrip} />
      <FundInfo
        quantity={quantity}
        avgCost={avg_cost_in_dollar}
        investedAmmount={invested_ammount_in_dollar}
      />
      <MarketValue
        percentage_of_portfolio_value={percentage_of_portfolio_value}
        market_value={invested_ammount_in_dollar}
        investedAmmount={invested_ammount_in_dollar}
        unrealized_p_and_l={unrealized_p_and_l}
      />

      <UnrealizedPAndL
        unrealizedPAndL={unrealized_p_and_l}
        returnPercentage={return_percentage}
      />
      <Buttons />
    </div>
  );
}

export default Card;
