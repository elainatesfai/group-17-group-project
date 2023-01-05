import React from 'react'
import '../css/hero.css'

function hero() {
  return (
    <div className='HeroContainer'>
      <div className='HeroContentContainer'>
        <div className='HeroTextContainer'>
          <h1 div className='HeroMainText'>
            Welcome to Unitriition, fName!
          </h1>
          <p className='HeroSubTitle'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!
          </p>
        </div>
        <div className='HeroImgContainer'>
          <img src='./assets/images/Hero.svg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default hero
