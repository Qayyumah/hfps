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
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
import "../assets/footer.css";

const Footer = () => {
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
                <p >
                  {" "}
                  1, Ikishe Road, Igbile-Ijebu, Ogun state.
                </p>
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
          </div>

          <div className='sub-us'>
            <div className='connect'>
              <h1>Connect With Us</h1>
              <div className='connect-ico'>
                <div className='twitter'>
                  <TiSocialTwitter
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </div>
                <div className='fb'>
                  <TiSocialFacebook
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </div>
                <div className='insta'>
                  <TiSocialInstagram
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='foot-text' style={{marginTop:"40px"}}>
          <p>© Copyright 2024 All rights reserved by RC</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
