import React, { useEffect, useState } from "react";
import "../assets/header.css";
import { IoMdPaperPlane } from "react-icons/io";
import { MdMap, MdMenu, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  max-height: ${(props) => (props.show ? "400px" : "0")};
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
  const [burgerStatus, setBurgerStatus] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  const toggleBurgerMenu = () => {
    setBurgerStatus(!burgerStatus);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={`heading-2 ${isFixed ? "fixed" : ""}`}>
        <div className='heading-text'>
          {/* <div className='icon-map'> */}
          <div className='header-logo'>
            <img
              style={{
                width: "60px",
                height: "60px",
              }}
              src='/images/logo.jpg'
            />
          </div>
          {/* </div> */}
          <div className='title'>
            <p>His Favour</p>
            <p>Private School</p>
          </div>
        </div>
        <div className='nav-menu'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/course'>Classes</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='https://hisfavourhighschool.vercel.app'>
            Our high school
          </Link>
        </div>

        <div className='burgernav'>
          <div className='bug' onClick={toggleBurgerMenu}>
            <MdMenu style={{ color: "#000", fontSize: "30px" }} />
          </div>
        </div>
      </div>
      <div className='heading1 head'>
        <div className='' style={{ textAlign: "center" }}>
          <div className='map-text'>
            <p>Branch 1: 1, Ikishe Road, Igbile-Ijebu, Ogun state.</p>
            <p>Branch 2: Behind Bank, Omu, Ijebu ode, Ogun State.</p>
          </div>
        </div>
        <div className='' style={{ textAlign: "center" }}>
          <div className='map-text'>
            <p>www.hisfavourprivateschool@gmail.com</p>
          </div>
        </div>
        <div className='' style={{ textAlign: "center" }}>
          <div className='map-text'>
            <p>+234 805 525 9967</p>
          </div>
        </div>
        <div className='heading1'></div>
      </div>

      <div className={`${isFixed ? "fixed" : ""}`}>
        <BurgerNav show={burgerStatus}>
          <Link to='/' onClick={() => setBurgerStatus(false)}>
            Home
          </Link>
          <Link to='/about' onClick={() => setBurgerStatus(false)}>
            About
          </Link>
          <Link to='/course' onClick={() => setBurgerStatus(false)}>
            Classes
          </Link>
          <Link to='/price' onClick={() => setBurgerStatus(false)}>
            Gallery
          </Link>
          <Link to='/contact' onClick={() => setBurgerStatus(false)}>
            Contact
          </Link>

          <Link
            to='https://hisfavourhighschool.vercel.app'
            onClick={() => setBurgerStatus(false)}
          >
            Our high school
          </Link>
        </BurgerNav>
      </div>
    </header>
  );
};

export default Header;
