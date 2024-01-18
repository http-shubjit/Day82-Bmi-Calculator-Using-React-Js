import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");
  const [bmi, setBMI] = useState("");

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!isNaN(weightNum) && !isNaN(heightNum) && weightNum > 0 && heightNum > 0) {
      const bmiValue = (weightNum / Math.pow(heightNum / 12, 2)) * 703;
      setBMI(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setMessage("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obese");
      }
    } else {
      setBMI("");
      setMessage("Please enter valid weight and height values.");
    }
  };

  const reload = () => {
    setWeight("");
    setHeight("");
    setBMI("");
    setMessage("");
  };

  return (
    <div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Weight (lbs):</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (in):</label>
            <input
              type="text"
              placeholder="Enter Height Value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" onClick={calculateBMI}>
              Submit
            </button>
            <button className="btn btnoutline" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
