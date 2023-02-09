import React from 'react'
import { Button } from '../../../components/Button/Button';
// import '/App.css'
import './Section03.css'

const Section03 = () => {
  return (
    <div className='hero03-container'>
      
      <div className="left-section">
        <h1>GET YOUR<div className="word-color-green">MEALS</div>   </h1>
        <p>What are you waiting for?</p>
     
        <div className="hero03-btns">
            <Button className ='btns' buttonStyle='btn--outline-secondary' buttonSize='btn--large'>
                GET STARTED
            </Button>
        </div>
      </div>
      <div className="right-section"></div>
      
    </div>
  )
}

export default Section03