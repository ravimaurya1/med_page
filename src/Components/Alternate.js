import React from "react";

//CSS
import "../Styles/Alternate.css";

const Alternate = ({ medicine, selectedMedicine, setSelectedMedicine }) => {
  const render_medicine = () => {
    let arr = [];
    for (let i = 0; i < medicine.length; i++) {
      if (i != selectedMedicine) {
        arr.push(
          <>
            <div className="alternatemed" key={i}>
              <div className="leftmed">
                <h3 onClick={() => setSelectedMedicine(i)}>
                  {medicine[i].name}
                </h3>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ color: "black", background: "#F3F3F3" }}>
                    Prescription
                  </p>
                  <p style={{ color: "black", background: "#F3F3F3" }}>
                    Allergies
                  </p>
                </div>
                <p>Mfr.{medicine[i].manufacturer}</p>
              </div>
              <div className="rightmed">
                <h4 style={{ color: "red" }}>Rs.{medicine[i].price}</h4>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/shopping-extras-set-1/512/1-512.png"
                  alt="Cart"
                />
              </div>
            </div>
            <hr />
          </>
        );
      }
    }
    return arr;
  };
  return (
    <div className="alternate">
      <p style={{ color: "grey" }}>ALTERNATE SALTS</p>
      {render_medicine()}
    </div>
  );
};

export default Alternate;
