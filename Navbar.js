import React from 'react'
import { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import toggle from '../../Assets/toggle.png';
import close from '../../Assets/close_icon.png';

const Navbar = () => {
  
  const [menu, setMenu] = useState("home");
  const menuRef = useState();
  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  
  


  return (
    <div id='home' className="navbar">

          <img src={toggle} onClick={openMenu} alt="toggle" className='nav-mob-open' /> 
          
        <ul ref={menuRef} className="menu-bar">
          <img src={close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=> setMenu("home")}>Home</p> </AnchorLink>{menu==='home'?  <h4>▶️</h4> : ''}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> setMenu("about")}>About Me</p> </AnchorLink>{menu==='about'? <h4>▶️</h4> : ''}</li>
            <li><AnchorLink className='anchor-link'  offset={50} href='#myworks'><p onClick={()=> setMenu("portfolio")}>Portfolio</p> </AnchorLink>{menu==='portfolio'? <h4>▶️</h4> : ''}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=> setMenu("service")}>Service</p> </AnchorLink>{menu==='service'? <h4>▶️</h4> : ''}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p> </AnchorLink>{menu==='contact'? <h4>▶️</h4> : ''}</li>
        </ul>
        
        <div className='nav-connect'>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu("connect")}>Connect with me</p> </AnchorLink>{menu==='connect'? <h4>▶️</h4> : ''}</li>        
            </div>
    </div>
  )
}

export default Navbar;
