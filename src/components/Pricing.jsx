import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../assets/pricing.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Pricing = () => {
  return (
    <div>
      <Header />
      <div>
        <div className='price-head-img'>
          <div className='price-head-flex'>
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
              <div className='price-head-text'>
                <h1>Gallery</h1>
                <div className='price-head-link'>
                  <Link to='/'>
                    HOME <IoIosArrowForward style={{ marginTop: "5px" }} />
                  </Link>
                  <p>
                    GALLERY <IoIosArrowForward />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid-pics'>
          {new Array(18).fill(0).map((_, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(/images/image_${index + 1}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                margin: "0",
                width: "100%",
                height: "280px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
