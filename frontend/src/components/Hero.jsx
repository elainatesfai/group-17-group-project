import React from 'react'
import '../css/hero.css'



function hero() {
  return (
    <div className='HeroContainer'>
      <div className='HeroContent'>
        <div className='HeroTextContainer'>
          <div className='HeroContentLogoWrapper' />
          <div className='HeroTextHeading'>
            Welcome back, (fName)
          </div>
          <div className='HeroTextSubTitle'>
            Bleh Blue Blee Blah Blough
          </div>
        </div>
        <div className='HeroImgContainer'>
          <img className='HeroImg' src='../assets/images/Hero.svg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default hero
