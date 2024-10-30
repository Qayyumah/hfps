import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../assets/home.css";
import {
  MdCheckCircleOutline,
  MdChromeReaderMode,
  MdPerson,
  MdPerson2,
} from "react-icons/md";
import About from "./About";
import Footer from "./Footer";
import Feedback from "./Feedback";

const MainContainer = () => {
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
      <Header />
      <div>
        <Carousel {...settings}>
          <div className='image1'>
            <div
              style={{
                backgroundImage: "url(/images/bg_1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center right",
                margin: "0",
                height: "600px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className='text'>
                <h1>Kids Are The Best </h1>
                <h1>Explorers In The World</h1>
                <div className='button'>
                  <a>Read More</a>
                </div>
              </div>
            </div>
          </div>

          <div className='image2'>
            <div
              style={{
                backgroundImage: "url(/images/bg_2.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center right",
                margin: "0",
                height: "600px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className='text'>
                <h1>Invest In</h1>
                <h1>Your Child's Future</h1>
                <div className='button'>
                  <a>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
        <div className='sub-sec-grid'>
          <div className='cert-teacher'>
            <div className='ico'>
              <MdPerson2
                style={{
                  backgroundColor: "#fff",
                  width: "60px",
                  height: "60px",
                  padding: "30px",
                  borderRadius: "100px",
                }}
              />
            </div>
            <div className='text'>
              <h3>Experienced Teachers</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic
              </p>
            </div>
          </div>
          <div className='spec-edu'>
            <div className='ico'>
              <MdChromeReaderMode
                style={{
                  backgroundColor: "#fff",
                  width: "60px",
                  height: "60px",
                  padding: "30px",
                  borderRadius: "100px",
                }}
              />
            </div>
            <div className='text'>
              <h3>Standard Curriculum</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic
              </p>
            </div>
          </div>
          <div className='book-lib'>
            <div className='ico'>
              <MdChromeReaderMode
                style={{
                  backgroundColor: "#fff",
                  width: "60px",
                  height: "60px",
                  padding: "30px",
                  borderRadius: "100px",
                }}
              />
            </div>
            <div className='text'>
              <h3>Clean Environment</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic
              </p>
            </div>
          </div>
          <div className='certification'>
            <div className='ico'>
              <MdChromeReaderMode
                style={{
                  backgroundColor: "#fff",
                  width: "60px",
                  height: "60px",
                  padding: "30px",
                  borderRadius: "100px",
                }}
              />
            </div>
            <div className='text'>
              <h3>Certification</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic
              </p>
            </div>
          </div>
        </div>

        {/*about*/}
        <div className='about'>
          <div className='offer'>
            <div className='offer1'>
              <div className='offer-header'>
                <h1>What We Offer</h1>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word.
                </p>
              </div>
              <div className='offer-list'>
                <div className='lists'>
                  <MdCheckCircleOutline
                    style={{
                      backgroundColor: "blue",
                      marginTop: "-50px",
                      width: "20px",
                      height: "10px",
                      padding: "30px",
                      borderRadius: "100%",
                    }}
                  />
                  <div className='list-text'>
                    <h4>Safety First</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>

                <div className='lists'>
                  <MdCheckCircleOutline
                    style={{
                      backgroundColor: "blue",
                      marginTop: "-50px",
                      width: "20px",
                      height: "10px",
                      padding: "30px",
                      borderRadius: "100%",
                    }}
                  />
                  <div className='list-text'>
                    <h4>Regular Classes</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>

                <div className='lists'>
                  <MdCheckCircleOutline
                    style={{
                      backgroundColor: "blue",
                      width: "20px",
                      marginTop: "-50px",
                      height: "10px",
                      padding: "30px",
                      borderRadius: "100%",
                    }}
                  />
                  <div className='list-text'>
                    <h4>Certified Teachers</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>

                <div className='lists'>
                  <MdCheckCircleOutline
                    style={{
                      backgroundColor: "blue",
                      width: "20px",
                      marginTop: "-50px",
                      height: "10px",
                      padding: "30px",
                      borderRadius: "100%",
                    }}
                  />
                  <div className='list-text'>
                    <h4>Sufficient Classrooms</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>

                <div className='lists'>
                  <MdCheckCircleOutline
                    style={{
                      backgroundColor: "blue",
                      width: "20px",
                      marginTop: "-50px",
                      height: "10px",
                      padding: "30px",
                      borderRadius: "100%",
                    }}
                  />
                  <div className='list-text'>
                    <h4>Creative Lessons</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>

                <div className='lists'>
                  <MdCheckCircleOutline
                    style={{
                      backgroundColor: "blue",
                      width: "20px",
                      marginTop: "-50px",
                      height: "10px",
                      padding: "30px",
                      borderRadius: "100%",
                    }}
                  />
                  <div className='list-text'>
                    <h4>Sports Facilities</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='offer2'>
              <div className='offer2-head'>
                <h1>Welcome to His Favour Private School</h1>
              </div>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word.
              </p>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies it with the necessary
                regelialia. And if she hasn’t been rewritten, then they are
                still using her.
              </p>

              <div className='offer2-btn'>
                <a>Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div className='manners'>
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.602), rgba(0, 0, 0, 0.729)), url(/images/bg_3.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "top",
              margin: "0",
              height: "300px",
              padding: "60px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className='manners-text'>
              <div className='text-text'>
                <h1>Build A Brighter Future For Your Child</h1>
                <a>Enrol your child</a>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <p>
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>

        {/* <div className='courses'>
                <div className='course-head'>
                    <h1 style={{color:'#5d50c6'}}>Our <span style={{color:'orange'}}> Courses</span></h1>
                    <p>Separated they live in. A small river named Duden flows 
                    by their place and supplies it with the </p>
                    <p>necessary regelialia.It is a paradisematic country</p>
                </div>
                <div className='course-box'>
                    <div className='course-flex'>
                        <div style={{
                            backgroundImage:'url(/images/course-1.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition:'center center',
                            margin:'0',
                            width:'250px',
                            height:'280px',
                            backgroundRepeat:'no-repeat',
                        }}>
                        </div>
                        
                        <div className='course-text'>
                            <h1>Arts Lesson</h1>
                            <p style={{color:'orange'}}>Class time: <span style={{color:'#000'}}>9:00am - 10am</span></p>
                            <p>Separated they live in. A small river named Duden flows 
                            by their place and supplies it with the necessary regelialia. 
                            It is a paradisematic country</p>
                        </div>
                        
                    </div>

                    <div className='course-flex'>
                        <div style={{
                            backgroundImage:'url(/images/course-2.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition:'center center',
                            margin:'0',
                            width:'250px',
                            height:'280px',
                            backgroundRepeat:'no-repeat',
                        }}>
                        </div>
                        
                        <div className='course-text'>
                            <h1>Language Lesson</h1>
                            <p style={{color:'orange'}}>Class time: <span style={{color:'#000'}}>9:00am - 10am</span></p>
                            <p>Separated they live in. A small river named Duden flows 
                            by their place and supplies it with the necessary regelialia. 
                            It is a paradisematic country</p>
                        </div>
                        
                    </div>

                    <div className='course-flex'>
                        <div style={{
                            backgroundImage:'url(/images/course-3.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition:'center center',
                            margin:'0',
                            width:'250px',
                            height:'280px',
                            backgroundRepeat:'no-repeat',
                        }}>
                        </div>
                        
                        <div className='course-text'>
                            <h1>Music Lesson</h1>
                            <p style={{color:'orange'}}>Class time: <span style={{color:'#000'}}>9:00am - 10am</span></p>
                            <p>Separated they live in. A small river named Duden flows 
                            by their place and supplies it with the necessary regelialia. 
                            It is a paradisematic country</p>
                        </div>
                    
                    </div>

                    <div className='course-flex'>
                        <div style={{
                            backgroundImage:'url(/images/course-4.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition:'center center',
                            margin:'0',
                            width:'250px',
                            height:'280px',
                            backgroundRepeat:'no-repeat',
                        }}>
                        </div>
                    
                        <div className='course-text'>
                            <h1>Sports Lesson</h1>
                            <p style={{color:'orange'}}>Class time: <span style={{color:'#000'}}>9:00am - 10am</span></p>
                            <p>Separated they live in. A small river named Duden flows 
                            by their place and supplies it with the necessary regelialia. 
                            It is a paradisematic country</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='experience'>
                <div style={{
                    backgroundImage:'url(/images/bg_4.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition:'50% -138.1px',
                    margin:'0',
                    height:'480px',
                    paddingBottom:'50px',
                    backgroundRepeat:'no-repeat',
                }}>
                <div className='experience-box'>
                    <div className='exp1'>
                        <h1>20 Years of<span style={{color:'#000'}}> Experience</span></h1>
                        <p>Separated they live in. A small river named Duden flows by their place 
                        and supplies it with the</p><p> necessary regelialia. It is a paradisematic country</p>
                    </div>
                    <div className='exp2'>
                        <div className='num-exp'>
                            <p>18</p>
                            <span>Certified Teachers</span>
                        </div>

                        <div className='num-exp'>
                            <p>351</p>
                            <span>Successful Kids</span>
                        </div>

                        <div className='num-exp'>
                            <p>564</p>
                            <span>Happy Parents</span>
                        </div>

                        <div className='num-exp'>
                            <p>300</p>
                            <span>Award Won</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className='feedback'>
                <div className='feed-head'>
                    <h1 style={{color: '#5d50c6'}}>What Parents <span style={{color:'orange'}}>Say About Us</span></h1>
                    <p>Separated they live in. A small river named Duden flows by their place and supplies it with the</p>
                    <p>necessary regelialia. It is a paradisematic country</p>
                </div>

                <Feedback/>
                
            </div>

            <div className='pricing'>
                <div className='price-head'>
                    <h1 style={{color: '#5d50c6'}}>Our <span style={{color:'orange'}}>Pricing</span></h1>
                    <p>Separated they live in. A small river named Duden flows by their place and supplies it with the</p>
                    <p>necessary regelialia. It is a paradisematic country</p>
                </div>

                <div className='price-box'>
                    <div className='price1'>
                        <h3>Basic</h3>
                        <h4 style={{color: '#1eaaf1'}}>$24.50 <sub>/ 5mos</sub> </h4>
                        <div style={{
                            backgroundImage:'url(/images/bg_1.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition:'top center',
                            margin:'0',
                            width:'100%',
                            height:'150px',
                            backgroundRepeat:'no-repeat',
                        }}>
                        </div>
                        <p>
                            Far far away, behind the word mountains, far from the 
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>

                        <a>Take a Course</a>
                    </div>

                    <div className='price2'>
                        <h3>Standard</h3>
                        <h4 style={{color: '#1eaaf1'}}>$24.50 <sub>/ 5mos</sub> </h4>
                        <div style={{
                            backgroundImage:'url(/images/bg_2.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition:'top center',
                            margin:'0',
                            width:'100%',
                            height:'150px',
                            backgroundRepeat:'no-repeat',
                        }}>
                        </div>
                        <p>
                            Far far away, behind the word mountains, far from the 
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>

                        <a>Take a Course</a>
                    </div>

                    <div className='price3'>
                        <h3>Premium</h3>
                        <h4 style={{color: '#1eaaf1'}}>$24.50 <sub>/ 5mos</sub> </h4>
                        <div style={{
                            backgroundImage:'url(/images/course-3.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition:'top center',
                            margin:'0',
                            width:'100%',
                            height:'150px',
                            backgroundRepeat:'no-repeat',
                        }}>
                        </div>
                        <p>
                            Far far away, behind the word mountains, far from the 
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>

                        <a>Take a Course</a>
                    </div>

                    <div className='price4'>
                        <h3>Platinum</h3>
                        <h4 style={{color: '#1eaaf1'}}>$24.50 <sub>/ 5mos</sub> </h4>
                        <div style={{
                            backgroundImage:'url(/images/teacher-1.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition:'top center',
                            margin:'0',
                            width:'100%',
                            height:'150px',
                            backgroundRepeat:'no-repeat',
                        }}>
                        </div>
                        <p>
                            Far far away, behind the word mountains, far from the 
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>

                        <a>Take a Course</a>
                    </div>
                </div>
            </div>

            <div className='grid-pics'>
                <div style={{
                    backgroundImage:'url(/images/course-1.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition:'top center',
                    margin:'0',
                    width:'100%',
                    height:'280px',
                    backgroundRepeat:'no-repeat',
                }}>
                </div>

                <div style={{
                    backgroundImage:'url(/images/image_2.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition:'top center',
                    margin:'0',
                    width:'100%',
                    height:'280px',
                    backgroundRepeat:'no-repeat',
                }}>
                </div>

                <div style={{
                    backgroundImage:'url(/images/image_3.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition:'top center',
                    margin:'0',
                    width:'100%',
                    height:'280px',
                    backgroundRepeat:'no-repeat',
                }}>
                </div>

                <div style={{
                    backgroundImage:'url(/images/image_4.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition:'top center',
                    margin:'0',
                    width:'100%',
                    height:'280px',
                    backgroundRepeat:'no-repeat',
                }}>
                </div>
            </div> */}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default MainContainer;

const Carousel = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      margin-top: -70px;
      color: blue;
    }
  }

  li.slick-active button:before {
    color: white;
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
