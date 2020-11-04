import React from "react";

function Price({ price, scrip }) {
  return (
    <div className="price_sec">
      <div className="menu">
        <button>
          <i className="fas fa-bars" />
        </button>
      </div>
      <div className="price">
        <p>
          <i className="fas fa-dollar-sign" /> {price}
        </p>
      </div>
      <div className="scrip">{scrip || ""}</div>
    </div>
  );
}

export default Price;
