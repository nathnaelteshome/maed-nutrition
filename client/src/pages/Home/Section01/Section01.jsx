import React from 'react'
import { Button } from '../../../components/Button/Button'
import './Section01.scss'

const Section01 = () => {
  return (
      <div className="hero01-container">

      <div className="left">
        <img className="green-bar" src="/images/Svg/Rectangle_26.svg" alt="bar" />
        <img className="transparent-plate" src="/images/Dish_transparent.png" alt="bar" />
        {/* <img className="png-tree" src="/images/Svg/pngtree.svg" alt="bar" /> */}
      </div>

      <div className="right">
        <div className="head-words">
           <div className="first-line">
          <div className="orange-word">Eat </div>  
          <div className="normal-word">With</div>  
          </div>
          <div className="second-line">
          <div className="normal-word">A</div>  
        <div className="green-word">Purpose</div>
          </div>
        </div>
         
        <p>Our menus are designed by Nutritionist and pro chefs to help you get in fit while enjoying every Bite</p>
      </div>
    </div>
  )
}

export default Section01