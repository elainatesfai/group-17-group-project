import React from 'react';
import '../css/WeightTracker.css';

const WeightTracker = () => {
  return (
    <>
    <div className="weight-tracker">
      <h1>Weight Tracker</h1>
      <form>
        <label htmlFor="weight-input">To begin enter your current weight:</label>
        <input type="number" id="weight-input" />
        <button type="submit">Submit</button>
      </form>
      <div className="weight-history">
        <h2>Weight History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jan 26</td>
              <td>83 kg</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="weight-goal">
        <h2>Weight Goal</h2>
        <p>Your goal is to reach 91 kg</p>
      </div>
    </div>
    </>
  );
};

export default WeightTracker;
