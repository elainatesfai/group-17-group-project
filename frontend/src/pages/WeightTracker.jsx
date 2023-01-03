import React from "react";
import Navbar from "../components/Navbar";
import "../css/weighttracker.css";
import "../css/navbar.css";


<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>;


function WeightTracker() {
  return (
    <>
      {Navbar()}
      <div className="gap"></div>
      <div className="container1">
        <h1>Weight Check-In</h1>
        <div className="container2">
          <div className="c21">
            <form>
              <label htmlFor="weight-input">Enter your current weight: </label>
              <input type="number" id="weight-input" />
              <button className="button-54" type="submit">
                Submit
              </button>
            </form>
            <div className="graph"></div>
          </div>
          <div className="c22">
            <p>
              You should occasionally keep track of your weight in order to
              monitor your development. Your weight changes everyday as a result
              of uncontrolled variables like water, thus we advise once a week.
              We recommend starting your daily weight-checking routine early in
              the morning, just before breakfast.
            </p>
            <br />
            <p>
              Taking measures will help you track your progress even more
              effectively since even while your body will get more toned as a
              result of fat loss and muscle growth, your weight may remain the
              same or even rise during this time. We advise collecting
              measurements every two to four weeks.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="weight-tracker">
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
      </div> */}
    </>
  );
}

export default WeightTracker;
