import React from "react";
import Header from "./Header";
import {
  MdArrowBack,
  MdArrowRight,
  MdError,
  MdOutlineArrowForward,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "../assets/contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div>
        <div className='contact'>
          <div className='contact-header-img'>
            <div className='contact-flex'>
              <div
                style={{
                  backgroundImage: "url(/images/bg_2.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  margin: "0",
                  width: "100%",
                  height: "300px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className='contact-text'>
                  <h1>Contact Us</h1>
                  <div className='contact-link'>
                    <Link to='/'>
                      HOME <IoIosArrowForward style={{ marginTop: "5px" }} />
                    </Link>
                    <p>
                      CONTACT <IoIosArrowForward />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='contact-info-box'>
            <div className='con-info1'>
              <h1>Address</h1>
              <p style={{ marginBottom: "0" }}>1, Ikishe Road, Igbile-Ijebu, Ogun state.</p>
            </div>

            <div className='con-info1'>
              <h1>Contact Number</h1>
              <p>+234 805 525 9967</p>
            </div>

            <div className='con-info1'>
              <h1>Email Address</h1>
              <p>www.hisfavourprivateschool@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
