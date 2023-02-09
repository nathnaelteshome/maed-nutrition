import React from 'react'
import Cards from './Cards/Cards'
import './Home.scss'
import Section01 from './Section01/Section01'
import Section02 from './Section02/Section02'
import Section03 from './Section03/Section03'

const Home = () => {
  return (
    <div className='home-page'>
      <Section01/>
      <Section02/>
      <Section03/>
      <Cards/>
    </div>
  )
}

export default Home