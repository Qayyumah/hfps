import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import '../assets/feedback.css'

const Feedback = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true

    }
  return (
    <div>
        <Carousel {...settings}>
            <div className='feedback1'>
                <img src='/images/teacher-1.jpg'/>
                <div className='feedback-text'>
                   <p>Far far away, behind the word mountains, 
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
                    <h2>Ken Bosh</h2>
                    <span>Mother</span>
                </div>
            </div>

            <div className='feedback1'>
                <img src='/images/teacher-2.jpg'/>
                <div className='feedback-text'>
                   <p>Far far away, behind the word mountains, 
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
                    <h2>Mark Huff</h2>
                    <span>Mother</span>
                </div>
            </div>

            <div className='feedback1'>
                <img src='/images/teacher-3.jpg'/>
                <div className='feedback-text'>
                   <p>Far far away, behind the word mountains, 
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
                    <h2>Racky Handerson</h2>
                    <span>Father</span>
                </div>
            </div>

            <div className='feedback1'>
                <img src='/images/teacher-2.jpg'/>
                <div className='feedback-text'>
                   <p>Far far away, behind the word mountains, 
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>

                    <h2>Rodel Golez</h2>
                    <span>Mother</span>
                </div>
            </div>

            <div className='feedback1'>
                <img src='/images/teacher-1.jpg'/>
                <div className='feedback-text'>
                   <p>Far far away, behind the word mountains, 
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>

                    <h2>Henry Dee</h2>
                    <span>Mother</span>
                </div>
            </div>

        </Carousel>
    </div>
  )
}

export default Feedback

const Carousel = styled(Slider)`
    justify-content: center;
    padding: 80px 120px;

    @media(max-width: 600px){
        padding: 50px 0px;
    }

    ul li button{
        &:before{
            font-size: 15px;
            margin-top: 0px;

            @media(max-width: 600px){
                font-size: 12px;
            }
        }
    }

    li.slick-active button:before{
        color: #1eaaf1;
        
    }
    button{
        z-index: 1;
    }
    .slick-prev{
        margin-left: 80px;
        display: none;

        @media (max-width:600px){
            margin-left: 30px;
        }
    }
    .slick-next{
        margin-right: 130px;
        display: none;

        @media (max-width:600px){
            margin-right: 70px;
        }
    }
    .slick-prev::before{
        display: none;
        content: '';
        position : absolute;
        top: -40%;
        width: 1.8rem;
        height: 3px;
        transform: rotate(-45deg);
        background-color: #fff;
        transition: all 0.2s;

        @media (max-width:800px){
            display: none;
        }
    }
    .slick-prev::after {
        display: none;
        content: '';
        top: 50%;
        position : absolute;
        width: 1.8rem;
        height: 3px;
        transform: rotate(45deg);
        background-color: #fff;
        transition: all 0.2s;

        @media (max-width:800px){
            display: none;
        }
}
    .slick-next::before{
        display: none;
        content: '';
        position : absolute;
        top: -40%;
        width: 1.8rem;
        height: 3px;
        transform: rotate(45deg);
        background-color: #fff;
        transition: all 0.2s;

        @media (max-width:800px){
            display: none;
        }
    }

    .slick-next::after {
        display: none;
        content: '';
        top: 50%;
        position : absolute;
        width: 1.8rem;
        height: 3px;
        transform: rotate(-45deg);
        background-color: #fff;
        transition: all 0.2s;

        @media (max-width:800px){
            display: none;
        }
}
`