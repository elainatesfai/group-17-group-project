import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import './navbar.css';

export default function Navbar() {

  // to change burger classes
  const setBurgerClass = useState("BurgerBar unclicked")
  const setMenuClass = useState("DropdownMenu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

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
          
          <div className='Item'>
                Home
            </div>
            <div className='Item'>
                Weight Tracker
            </div>
            <div className='Item'>
            
            </div>
            <div className='Item'>
                Calorie Calculator
            </div>
            <div className='Item'>
                Meal Planner
            </div>
          </div>
          <div className='Logo' >
              <div className='LogoWrapper'>
                <img className='Img' src='../assets/Images/Logo.png' alt='' />
              </div>
            </div>
            {/* <div className='MobileIcon' onClick={() => setIsMenuClicked(!isMenuClicked)}>
              {(isMenuClicked?<HiMenuAlt4/>:<RiCloseLine/>)}
            </div> */}
//dropdown menu icon is the MobileIcon
            <div className='MobileIcon' onClick={() => updateMenu(setIsMenuClicked(!isMenuClicked))}>
              {(isMenuClicked?<RiCloseLine/>:<HiMenuAlt4/>)}
            </div>
        </div>
        <div className={(isMenuClicked?'DropdownMenu':'DropdownMenuHidden')}>
          <div className='DropdownMenuList'>
            <div className='DropdownMenuItem'>
              Home
            </div>
            <div className='DropdownMenuItem'>
              Weight Tracker
            </div>
            <div className='DropdownMenuItem'>
              Calorie Calculator
            </div>
            <div className='DropdownMenuItem'>
              Meal Planner
            </div>
          </div>
        </div>
      </>
  )
}

