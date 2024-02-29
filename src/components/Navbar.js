import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file
import logo from "../Images/logo.png";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    navigate("/login")
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="container">
          <img src={logo} alt="" />
          Journey Journal
        </div>
      </div>
      <button className="menu-toggle" onClick={toggleNavbar}>
        Menu
      </button>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><RouterLink to="/" spy={true} smooth={true} offset={-70} duration={500}>Home</RouterLink></li>
        <li><ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500}>About</ScrollLink></li>
        <li><ScrollLink to="places" spy={true} smooth={true} offset={-70} duration={500}>Places</ScrollLink></li>
        <li><ScrollLink to="testimonials" spy={true} smooth={true} offset={-70} duration={500}>Testimonials</ScrollLink></li>
        <li><ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact Us</ScrollLink></li>
        {(!localStorage.getItem("authToken")) ?
          <>
            <li><RouterLink to="/login" spy={true} smooth={true} offset={-70} duration={500}>Search</RouterLink></li>
            <li> <RouterLink to="/login" spy={true} smooth={true} offset={-70} duration={500} >Login</RouterLink></li>
            <li> <RouterLink to="/createuser" spy={true} smooth={true} offset={-70} duration={500}>Signup</RouterLink></li>
          </>
          : <>
            <li><RouterLink to="/search" spy={true} smooth={true} offset={-70} duration={500}>Search</RouterLink></li>
            <li><RouterLink to="/" spy={true} smooth={true} offset={-70} duration={500} onClick={handleLogout}>Logout</RouterLink> </li>
          </>}

      </ul>



    </nav>
  );
};

export default Navbar;
