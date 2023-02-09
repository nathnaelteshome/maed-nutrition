import { PersonAddAlt1Outlined } from '@mui/icons-material'
import React,{ useState,useEffect }from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'

import './Navbar.scss'

function Navbar() {
    const [click,setClick] = useState(false)
    const [button,setButton] = useState(true)
    const [navbar,setNavBar] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMevnu = () =>setClick(false)
    const showButton = () =>{
        if (window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true);
        }
    }


    useEffect(()=>{
        showButton()
    },[])
    
    window.addEventListener('resize',showButton);

    const changeNavBackground = () =>{
        if(window.scrollY >= 20){
            setNavBar(true);
        }else{
            setNavBar(false);
        }
        console.log(window.scrollY)
    }

    window.addEventListener('scroll',changeNavBackground)


  return (
    <>
    <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
            <Link to="/" className="navbar-title" onClick={closeMobileMevnu}>
                ማ
                <div className="navbar-logo-green-word">ዕ</div>
                ድ
            </Link>  
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active' :'nav-menu'}>
                <li className="nav-item">
                    <Link to ='/' className='nav-links' onClick={closeMobileMevnu} >
                        Menu
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to ='/services' className='nav-links' onClick={closeMobileMevnu} >
                        How it works
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to ='/testimonal' className='nav-links' onClick={closeMobileMevnu} >
                        Testimonal
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link to ='/faq' className='nav-links' onClick={closeMobileMevnu} >
                        FAQ
                    </Link>
                </li>
                
               
            </ul> 
            <div className="sign-up-box">
            <div className="sign-up-icon">
            <Link to ='/sign-up' className='nav-links-sign-up' onClick={closeMobileMevnu} >
                    <PersonAddAlt1Outlined/>
            </Link>
            </div>

            {button  && <Button  buttonStyle='btn--quaternary' >Get Started</Button>}     
            </div>
        </div>
    </nav> 
    </>
  )
}

export default Navbar