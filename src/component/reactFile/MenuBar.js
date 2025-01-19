import React, { useState, useEffect, useRef } from 'react';  
import '../css/MenuBar.css';  
import logo from '../image/logo.png';  
import { Link, useNavigate } from 'react-router-dom';

const MenuBar = () => {  
  const [isOpen, setIsOpen] = useState(false);  
  const menuRef = useRef(null); // Ref to track the menu container

  const toggleMenu = () => {  
    setIsOpen(!isOpen);  
  };  

  const navigate = useNavigate();
  
  const handleClickOnLogo = () => {
    navigate('/');
  };

  const handleMenuItemClick = () => {  
    setIsOpen(false); // Close the menu when an item is clicked  
  }; 

  // Effect to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Close the menu if the click is outside
      }
    };

    // Add event listener when the menu is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // Only re-run the effect if `isOpen` changes

  return (  
    <div className='menu'>  
      <div className='logo' onClick={handleClickOnLogo}>  
        <img src={logo} alt="karanLogo" />  
      </div>  
      <div ref={menuRef} className={`menuOptions ${isOpen ? 'open' : ''}`}>  
        <Link to="/services" onClick={handleMenuItemClick}>Services</Link>  
        <Link to="/technologies" onClick={handleMenuItemClick}>Technologies</Link>  
        <Link to="/portfolio" onClick={handleMenuItemClick}>Portfolio</Link>  
        <Link to="/contact" onClick={handleMenuItemClick}>Contact</Link>  
      </div>   
      <div className='menu-icon' onClick={toggleMenu}>  
        <i className="fa-solid fa-bars"></i>  {/* Font Awesome icon */}  
      </div>  
    </div>  
  );  
}  

export default MenuBar;