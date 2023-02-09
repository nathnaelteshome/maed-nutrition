import React from 'react'
import { Button } from '../../../components/Button/Button'
import './Section02.scss'

const Section02 = () => {
  return (
    <div className="presentation">
      <div className="left">
        <div className="header">
        <h1 className="normal-word">Not Just Any other</h1>
        <h1 className="orange-word">Meal</h1>
        <p>Healthy Fats ,Clean Carbs And </p>
        <p>High Proteins meals ready to be delivered</p>
        </div>
        <div className="buttons">
        <Button className ='btn' buttonStyle='btn--secondary'>View Meal Plan</Button>
        <Button className ='btn' buttonStyle='btn--outline-secondary'>Take a Quiz</Button>
        </div>
      </div>
      <div className="right">
      <img className="image_4" src="/images/image_4.png" alt="bar" />
      </div>
  </div>
  )
}

export default Section02