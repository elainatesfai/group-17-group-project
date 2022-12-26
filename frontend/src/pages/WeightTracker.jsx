
import React from 'react'
import Navbar from '../components/Navbar';

function WeightTracker() {
  return (
    <>
      /* <Navbar /> */
      
      <div className="weight-tracker">
      <h1>Weight Tracker</h1>
      <form>
        <label htmlFor="weight-input">Enter your weight:</label>
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
              <td>Jan 1</td>
              <td>150 lbs</td>
            </tr>
            <tr>
              <td>Jan 8</td>
              <td>149 lbs</td>
            </tr>
            <tr>
              <td>Jan 15</td>
              <td>148 lbs</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="weight-goal">
        <h2>Weight Goal</h2>
        <p>Your goal is to reach 140 lbs</p>
        <img src="/images/weight-goal.png" alt="Weight goal visualization" />
      </div>
    </div>
    </>
  )
}

export default WeightTracker
