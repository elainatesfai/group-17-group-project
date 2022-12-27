import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import '../css/navbar.css';

export default function Navbar() {

  // to change burger classes
  const setBurgerClass = useState("BurgerBar unclicked")
  const setMenuClass = useState("DropdownMenu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // to navigate using navbar

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToCalorieCalculator = () => {
    navigate('/caloriecalculator');
  };

  const navigateToWeightTracker = () => {
    navigate('/weighttracker');
  };

  const navigateToMealPlanner = () => {
    navigate('/mealplanner');
  };

  // toggle burger DropdownMenu change
  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('BurgerBar clicked')
      setMenuClass('DropdownMenu visible')
    }
    else {
      setBurgerClass('BurgerBar unclicked')
      setMenuClass('DropdownMenu hidden')
    }
  }

  return (
    <>
      <div className='Nav'>
        <div className='NavContainer'>
          
          <div className='Item'  onClick={navigateToHome}>
                Home
            </div>
            <div className='Item' onClick={navigateToWeightTracker}>
                Weight Tracker
            </div>
            <div className='Item' onClick={navigateToHome}>
            
            </div>
            <div className='Item' onClick={navigateToCalorieCalculator}>
                Calorie Calculator
            </div>
            <div className='Item' onClick={navigateToMealPlanner}>
                Meal Planner
            </div>
          </div>
          <div className='Logo' >
              <div className='LogoWrapper'>
                <img className='Img' src='../assets/Images/Logo.png' alt='' />
              </div>
            </div>
            <div className='MobileIcon' onClick={() => updateMenu(setIsMenuClicked(!isMenuClicked))}>
              {(isMenuClicked?<RiCloseLine/>:<HiMenuAlt4/>)}
            </div>
        </div>
        <div className={(isMenuClicked?'DropdownMenu':'DropdownMenuHidden')}>
          <div className='DropdownMenuList'>
            <div className='DropdownMenuItem' onClick={navigateToHome}>
              Home
            </div>
            <div className='DropdownMenuItem' onClick={navigateToWeightTracker}>
              Weight Tracker
            </div>
            <div className='DropdownMenuItem' onClick={navigateToCalorieCalculator}>
              Calorie Calculator
            </div>
            <div className='DropdownMenuItem' onClick={navigateToMealPlanner}>
              Meal Planner
            </div>
          </div>
        </div>
      </>
  )
}

