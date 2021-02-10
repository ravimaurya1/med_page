import React, { useState } from "react";
import "../Styles/Description.css";

const Description = ({ medicine, selectedMedicine }) => {
  const [text, setText] = useState(medicine[selectedMedicine].description);
  const [active, setActive] = useState(1);
  return (
    <>
      <div className="description">
        <h3>What is {medicine[selectedMedicine]["short_name"]}?</h3>
        <p>--{medicine[selectedMedicine]["des"]}</p>
      </div>
      <div className="button-desc">
        <div className="buttons">
          <button
            onClick={() => {
              setText(medicine[selectedMedicine].description);
              setActive(1);
            }}
            className={active === 1 ? "active" : ""}
          >
            Therapeutic Uses
          </button>
          <button
            className={active === 2 ? "active" : ""}
            onClick={() => {
              setText(medicine[selectedMedicine]["direction of usage"]);
              setActive(2);
            }}
          >
            Direction of uses
          </button>
          <button
            className={active === 3 ? "active" : ""}
            onClick={() => {
              setText(medicine[selectedMedicine]["warning"]);
              setActive(3);
            }}
          >
            Warning
          </button>
          <button
            className={active === 4 ? "active" : ""}
            onClick={() => {
              setText(medicine[selectedMedicine]["side-effect"]);
              setActive(4);
            }}
          >
            Side-Effect
          </button>
        </div>
        <div className="text">
          {active === 1 && (
            <div>
              <h3>
                What {medicine[selectedMedicine]["short_name"]} is used for?
              </h3>
              <p>{text}</p>
            </div>
          )}
          {active === 2 && (
            <div>
              <p>1.{text["1"][0]}</p>
              <p>2.{text["1"][1]}</p>
              <p>3.{text["1"][2]}</p>
              <h3>
                If you take more {medicine[selectedMedicine]["short_name"]}
              </h3>
              <p>{text["2"]}</p>
              <h3>
                If you forget to take {medicine[selectedMedicine]["short_name"]}
              </h3>
              <p>{text["3"]}</p>
              <h3>
                If you stop taking {medicine[selectedMedicine]["short_name"]}
              </h3>
              <p>{text["4"]}</p>
            </div>
          )}
          {active === 3 && (
            <div>
              {text.map((data, index) => {
                return (
                  <p key={index}>
                    {index + 1}.{data}
                  </p>
                );
              })}
            </div>
          )}
          {active === 4 && (
            <div>
              <p>Serious: {text["serious"]}</p>
              <p>Common: {text["common"]}</p>
              <p>Uncommon: {text["uncommon"]}</p>
            </div>
          )}
        </div>
      </div>
      <div className="disclaimer">
        <h4>Disclaimer:</h4>
        <p>
          The contents of this website are for informational purposes only and
          not intended to be a substitute for professional medical advice,
          diagnosis, or treatment. Please seek the advice of a physician or
          other qualified health provider with any questions you may have
          regarding a medical condition. Do not disregard professional medical
          advice or delay in seeking it because of something you have read on
          this website.
        </p>
      </div>
    </>
  );
};

export default Description;
