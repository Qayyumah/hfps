import React, { useEffect, useState } from 'react';
import '../assets/header.css';
import { IoMdPaperPlane } from 'react-icons/io';
import { MdMap, MdMenu, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BurgerNav = styled.div`
    position: relative;
    background: #000;
    color: #fff;
    width: 100%; 
    list-style: none;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    max-height: ${props => props.show ? '400px' : '0'}; 
    overflow: hidden; 
    transition: max-height 0.3s ease; 

    a {
        font-size: 17px;
        margin-top: 20px;
        padding: 10px 10px;
        text-decoration-line: none !important;
        color: #fff;
    }
`;

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [burgerStatus, setBurgerStatus] = useState(false); // State for burger menu

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  const toggleBurgerMenu = () => {
    setBurgerStatus(!burgerStatus); // Toggle burger menu visibility
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className='heading1'>
        <div className='heading-text'>
          <div className='icon-map'><MdMap style={{width:'30px', height:'25px'}}/></div>
          <div className='map-text'>
            <p>198 West 21th Street, Suite 721, New York NY 10016</p>
          </div>
        </div>
        <div className='heading-text'>
          <div className='icon-paper'><IoMdPaperPlane style={{width:'30px', height:'25px'}}/></div>
          <div className='map-text'>
            <p>youremail@email.com</p>
          </div>
        </div>
        <div className='heading-text'>
          <div className='icon-phone'><MdPhone style={{width:'30px', height:'25px'}}/></div>
          <div className='map-text'>
            <p>+ 1235 2355 98</p>
          </div>
        </div>
      </div>

      <div className={`heading-2 ${isFixed ? 'fixed' : ''}`}>
        <div className='header-logo'>
          <h1>Kiddos</h1>
        </div>
        <div className='nav-menu'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/course'>Courses</Link>
          <Link to='/price'>Pricing</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        <div className='burgernav'>
          <div className='bug' onClick={toggleBurgerMenu}>
            <MdMenu style={{color:'#ccc', fontSize:'30px'}}/>
            <h1>MENU</h1>
          </div>
        </div>
      </div>
      
      <BurgerNav show={burgerStatus}>
        <Link to='/' onClick={() => setBurgerStatus(false)}>Home</Link>
        <Link to='/about' onClick={() => setBurgerStatus(false)}>About</Link>
        <Link to='/course' onClick={() => setBurgerStatus(false)}>Courses</Link>
        <Link to='/price' onClick={() => setBurgerStatus(false)}>Pricing</Link>
        <Link to='/contact' onClick={() => setBurgerStatus(false)}>Contact</Link>
      </BurgerNav>
    </header>
  );
}

export default Header;


