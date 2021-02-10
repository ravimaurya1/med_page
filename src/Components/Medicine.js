import React, { useState } from "react";
import "../Styles/Medicine.css";

const Medicine = ({ medicine, selectedMedicine }) => {
  const [count, setCount] = useState(1);
  return (
    <div className="top">
      <div className="img-details">
        <div className="details">
          <h2>{medicine[selectedMedicine].name}</h2>
          <h4>{medicine[selectedMedicine]["short_name"]}</h4>
          <br />
          <br />
          <h4>Mfr:{medicine[selectedMedicine].manufacturer}</h4>
          <h4>Country:{medicine[selectedMedicine]["country of origin"]}</h4>
        </div>
        <div className="image">
          <img src={medicine[selectedMedicine]["image url"]} alt="image" />
          <div style={{ marginRight: "1.5rem" }}>
            <h4 style={{ textAlign: "right" }}>
              M.R.P:
              <span style={{ color: "red" }}>
                Rs.{medicine[selectedMedicine].price}
              </span>
            </h4>
            <p style={{ textAlign: "right" }}>(Inclusive of all taxes)</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="total">
          <p>TOTAL AMOUNT</p>
          <h2>Rs.{count * medicine[selectedMedicine].price}</h2>
        </div>
        <div className="qnt">
          <label htmlFor="qty">QTY</label>
          <select
            name="quantity"
            id="qty"
            onChange={(e) => {
              setCount(parseInt(e.target.value));
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
          </select>
        </div>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Medicine;
