import React from 'react';
import { CardItem } from '../../../components/CardItem/CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'  >
      <h1>Take a look at some of our mouthwatering dishes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className="card__item">
              <CardItem
              src='Images/img-9.jpg'
              text='Growth and repair support through balanced meal'
              label='Protien'
              path='/services'
            />
            </div> 
            <div className="card__item">
              
            <CardItem
              src='Images/img-6.jpg'
              text='Nutrition that support overall health and wellness'
              label='Luxury'
              path='/services'
              />
              </div> 
          </ul>
          <ul className='cards__items'>
          <div className="card__item">
              
            <CardItem
              src='Images/img-3.jpg'
              text='Eat deliciously well crafted meal'
              label='Carb'
              path='/services'
              />
              </div> 
              <div className="card__item">
              
            <CardItem
              src='Images/img-4.jpg'
              text='Nourishing well-balanced meals'
              label='Fat-Content'
              path='/products'
              />
              </div> 
              <div className="card__item">
              
              
            <CardItem
              src='Images/img-8.jpg'
              text='Satisfying and nutritious meals'
              label='Adrenaline'
              path='/sign-up'
              />
              </div> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;