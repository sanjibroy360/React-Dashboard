import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { types } from "../store/types";
import Card from "./Card";
import { useSelector } from "react-redux";
import Loader from "./Loader";

function Cards({ onSelectingMutualFund, onSelectingETF }) {
  let funds = useSelector((state) => state.funds);

  let [fundType, setFundType] = useState("mf");
  let state = useSelector((state) => state);
  useEffect(() => {
    switch (fundType) {
      case "mf":
        onSelectingMutualFund();
        break;
      case "etf":
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
        <select onChange={(event) => setFundType(event.target.value)}>
          <option value="mf">Mutual Funds</option>
          <option value="etf">ETFs</option>
        </select>
      </div>
      {funds?.map((fund) => {
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
