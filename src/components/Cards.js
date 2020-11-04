import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { types } from "../store/types";
import Card from "./Card";
import { useSelector } from "react-redux";
import Loader from "./Loader";

function Cards({ onSelectingMutualFund, onSelectingETF }) {
  let state = useSelector((state) => state);

  let [fundType, setFundType] = useState(state.fundType || "Mutual funds");
  
  useEffect(() => {
    switch (fundType) {
      case "Mutual funds":
        onSelectingMutualFund();
        break;
      case "ETF":
        onSelectingETF();
        break;
      default:
        return;
    }
  }, [fundType]);
  if (state.isLoading) {
    return <Loader />;
  }
  return (
    <div className="card_wrapper">
      <div className="fund_options">
        <select onChange={(event) => setFundType(event.target.value)} value={fundType}>
          <option value="Mutual funds">Mutual Funds</option>
          <option value="ETF">ETFs</option>
        </select>
      </div>
      {state.funds?.map((fund) => {
        return <Card fund={fund} key={fund.scrip} />;
      })}
    </div>
  );
}

function mapDispatchToProp(dispatch) {
  return {
    onSelectingMutualFund: () =>
      dispatch({ type: types.FETCH_ALL_MUTUAL_FUNDS }),
    onSelectingETF: () => dispatch({ type: types.FETCH_ALL_ETF }),
  };
}

function mapStateToProp({ fund }) {
  return { fund };
}

export default connect(mapStateToProp, mapDispatchToProp)(Cards);
