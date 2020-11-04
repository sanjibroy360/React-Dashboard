import React from "react";

function UnrealizedPAndL({ returnPercentage, unrealizedPAndL }) {
  return (
    <div className="return_sec">
      <div className="values">
        <div>
          <p className="label">Unrealized P/L</p>
          <p>${unrealizedPAndL||0.00}</p>
        </div>

        <div>
          <p>% Return</p>
          <div className="change_indicator">
            <p>
              {returnPercentage < 0 ? (
                <i className="fas fa-sort-down loss" />
              ) : (
                <i className="fas fa-sort-up profit" />
              )}
            </p>
            <p>{returnPercentage}%</p>
          </div>
        </div>
        <div className="progress_bar_of_return_wrapper">
          <div className="progress_bar">
            <div></div>
            <div
              className={returnPercentage < 0 ? "loss" : ""}
              style={{
                width: `${
                  (returnPercentage < 0 && returnPercentage * -1) || 0
                }%`,
              }}
            ></div>
          </div>
          <div className="progress_bar">
            <div
              className={returnPercentage > 0 ? "profit" : ""}
              style={{
                width: `${(returnPercentage >= 0 && returnPercentage) || 0}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnrealizedPAndL;
