import React, { useState } from 'react';
import './BMICalculator.css'; // Import CSS for styling

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBmi = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <div className="bmi-calculator-container"> {/* Add a class for styling */}
      <h3>BMI Calculator</h3>
      <form onSubmit={calculateBmi} className="bmi-form"> {/* Add a class for styling */}
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          className="form-input"
        />
        <button type="submit" className="form-button">Calculate BMI</button>
      </form>
      {bmi && <p className="form-message">Your BMI is: {bmi}</p>}
    </div>
  );
};

export default BMICalculator;
