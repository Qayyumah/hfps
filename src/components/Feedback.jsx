import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../assets/feedback.css";

const Feedback = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Carousel {...settings}>
        <div className='feedback1'>
          <div className='feedback-text'>
            <p>
              "Since enrolling my daughter in this school, I’ve seen tremendous
              improvement in her academics and confidence. The teachers are so
              dedicated, and the environment is truly nurturing."
            </p>
            <h2> ⁠John Okafor </h2>
            <span>Father</span>
          </div>
        </div>

        <div className='feedback1'>
          <div className='feedback-text'>
            <p>
              "This school gave my child the foundation she needed to excel in
              her studies. The emphasis on discipline and excellence prepared
              her for life’s challenges."
            </p>
            <h2>Aisha Bello</h2>
            <span>Mother</span>
          </div>
        </div>

        <div className='feedback1'>
          <div className='feedback-text'>
            <p>
              "The school invests in professional development and ensures
              students have the resources to succeed." ".
            </p>
            <h2>Mrs. Nneka Udo</h2>
            <span>Mother</span>
          </div>
        </div>

        <div className='feedback1'>
          <div className='feedback-text'>
            <p>
              "I love how the school encourages our wards to express our
              talents. From sports to academics, there’s always an opportunity
              to shine."
            </p>

            <h2>⁠ ⁠Iman Oladejo</h2>
            <span>Mother</span>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Feedback;

const Carousel = styled(Slider)`
  justify-content: center;
  padding: 80px 120px;

  @media (max-width: 600px) {
    padding: 50px 0px;
  }

  ul li button {
    &:before {
      font-size: 15px;
      margin-top: 0px;

      @media (max-width: 600px) {
        font-size: 12px;
      }
    }
  }

  li.slick-active button:before {
    color: #1eaaf1;
  }
  button {
    z-index: 1;
  }
  .slick-prev {
    margin-left: 80px;
    display: none;

    @media (max-width: 600px) {
      margin-left: 30px;
    }
  }
  .slick-next {
    margin-right: 130px;
    display: none;

    @media (max-width: 600px) {
      margin-right: 70px;
    }
  }
  .slick-prev::before {
    display: none;
    content: "";
    position: absolute;
    top: -40%;
    width: 1.8rem;
    height: 3px;
    transform: rotate(-45deg);
    background-color: #fff;
    transition: all 0.2s;

    @media (max-width: 800px) {
      display: none;
    }
  }
  .slick-prev::after {
    display: none;
    content: "";
    top: 50%;
    position: absolute;
    width: 1.8rem;
    height: 3px;
    transform: rotate(45deg);
    background-color: #fff;
    transition: all 0.2s;

    @media (max-width: 800px) {
      display: none;
    }
  }
  .slick-next::before {
    display: none;
    content: "";
    position: absolute;
    top: -40%;
    width: 1.8rem;
    height: 3px;
    transform: rotate(45deg);
    background-color: #fff;
    transition: all 0.2s;

    @media (max-width: 800px) {
      display: none;
    }
  }

  .slick-next::after {
    display: none;
    content: "";
    top: 50%;
    position: absolute;
    width: 1.8rem;
    height: 3px;
    transform: rotate(-45deg);
    background-color: #fff;
    transition: all 0.2s;

    @media (max-width: 800px) {
      display: none;
    }
  }
`;
