import React from 'react'
import Navbar from '../components/Navbar';
import "../css/caloriecalculator.css";

function CalorieCalculator(){
  return (
    <>
      {Navbar()}
      {/* hey */}
      <div className="background"></div>
      <div className="component">
        <h1>Calorie Calculator</h1> 
        <p>Your daily caloric intake calculator</p>
        <h2>let’s find how many calories you .. hdc</h2>
        <h3>Your cal. goal</h3>
      </div>

        <div className="inputcal">
            <form>
              <label>input calories consumed:</label>
              <input type="number" id="calories consumed" />
              <button className="button-1" type="submit">
                ENTER
              </button>

             
            </form>
             
        </div>
        <div classname="remainingcal">   
              <p>Remaining calories:</p>
            </div>
      
    </>
  );
}

export default CalorieCalculator;
