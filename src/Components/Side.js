import React from "react";
//CSS
import "../Styles/Side.css";

const Side = () => {
  return (
    <div className="side">
      <div className="check">
        <h5>CHECK AVAILABILITY</h5>
        <h6 style={{ color: "blue" }}>PINCODE</h6>
        <form>
          <input type="text" />
          <button type="submit">Check</button>
        </form>
      </div>
      <div className="offer">
        <div
          className="first"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h5>OFFERS APPLICABLE</h5>
          <p style={{ fontSize: "0.7rem" }}>View All Offers</p>
        </div>
        <div className="second">
          <h6>
            NMSFIT <span style={{ color: "green" }}>Save 20%</span>
          </h6>
          <p>
            Flat 20% off on medicines+10% NMS SuperCash on orders above Rs.
            1250. T & C Apply*
          </p>
        </div>
      </div>
    </div>
  );
};

export default Side;
