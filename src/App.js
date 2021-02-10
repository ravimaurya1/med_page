import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

//Components
import Medicine from "./Components/Medicine";
import Description from "./Components/Description";
import Side from "./Components/Side";
import Alternate from "./Components/Alternate";

function App() {
  const [medicine, setMedicine] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(2);
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/b/6023537f435c323ba1c41738", {
        headers: {
          "secret-key":
            "$2b$10$6LT/6VaQLm/PoRukS9nmGOPf0upNA95mWjvulpJn4iCHTvZdgHB/m",
        },
      })
      .then((data) => {
        setMedicine(data.data.med);
      });
  }, []);
  return (
    <div className="App">
      {console.log(medicine.length)}
      {medicine.length > 0 && (
        <>
          <div className="left">
            <Medicine medicine={medicine} selectedMedicine={selectedMedicine} />
            <Description
              medicine={medicine}
              selectedMedicine={selectedMedicine}
            />
          </div>
          <div className="right">
            <Side />
            <Alternate
              medicine={medicine}
              selectedMedicine={selectedMedicine}
              setSelectedMedicine={setSelectedMedicine}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
