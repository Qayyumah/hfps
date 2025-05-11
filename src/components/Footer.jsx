import React from "react";
import { IoMdMap } from "react-icons/io";
import {
  MdArrowForward,
  MdCalendarMonth,
  MdMail,
  MdMessage,
  MdPerson,
  MdPhone,
} from "react-icons/md";
import "../assets/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div className='foot'>
          <div className='questions'>
            <div className='q-head'>
              <h1>Have Questions?</h1>
            </div>
            <div className='q-display'>
              <IoMdMap style={{ fontSize: "20px" }} />
              <div className='q-text'>
                <p>Branch 1: 1, Ikishe Road, Igbile-Ijebu, Ogun state.</p>
                <p>Branch 2: Behind Bank, Omu, Ijebu ode, Ogun State.</p>
              </div>
            </div>

            <div className='q-display'>
              <MdPhone style={{ fontSize: "20px" }} />
              <div className='q-text'>
                <p>+234 805 525 9967</p>
              </div>
            </div>

            <div className='q-display'>
              <MdMail style={{ fontSize: "20px" }} />
              <div className='q-text'>
                <p> www.hisfavourprivateschool@gmail.com</p>
              </div>
            </div>
          </div>

          <div className='links'>
            <div className='link-head'>
              <h1>Links</h1>
            </div>
            <div className='link-list'>
              <MdArrowForward />
              <a>Home</a>
            </div>
            <div className='link-list'>
              <MdArrowForward />
              <a>About</a>
            </div>
            <div className='link-list'>
              <MdArrowForward />
              <a>Classes</a>
            </div>
            <div className='link-list'>
              <MdArrowForward />
              <a>Gallery</a>
            </div>
            <div className='link-list'>
              <MdArrowForward />
              <a>Contact</a>
            </div>
            <Link
              style={{ color: "#f4f4f4" }}
              to='https://hisfavourhighschool.vercel.app'
            >
              Our high school
            </Link>
          </div>

          <div className='sub-us'></div>
        </div>
        <div className='foot-text' style={{ marginTop: "40px" }}>
          <p>© Copyright {currentYear} All rights reserved by RC</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
