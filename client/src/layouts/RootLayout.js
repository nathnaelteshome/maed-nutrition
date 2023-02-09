import React from 'react'
import { Outlet} from "react-router-dom";
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar'
import './RootLayout.scss'

const RootLayout = () => {
  return (
    <div className='root-layout'>
        <Navbar/>
        <main>
            <Outlet/>
        </main>

        <Footer/>
    </div>
    
  )
}

export default RootLayout