import React from 'react'
import {Link} from 'react-router-dom'
// import './Cards.css'

export const CardItem = (props) => {
  return (
    <>
    <li className="cards_item">
        <Link className="cards__item__link" to={props.path}>
            <figure className="cards__item__pic-wrap" data-category={props.label}>
                <img src={props.src} alt="Food-img" className="cards__item__img" />
            </figure>
            <div className="cards__item__info">
                <h5 className="cards__item__text">
                    {props.text}
                </h5>
            </div>
        </Link>
    </li>
        
    </>
  )
}