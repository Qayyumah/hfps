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
                Our team of highly qualified and experienced educators is
                dedicated to providing personalized attention and expert
                guidance, ensuring a high-quality learning experience for every
                student.
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
                We follow a well-structured and recognized curriculum that
                ensures students gain essential skills and knowledge, preparing
                them for academic success and future challenges.
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
                We maintain a safe, hygienic, and well-organized learning
                environment, providing students with a comfortable space that
                enhances focus, well-being, and productivity.
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
                Upon completion, students receive recognized certifications that
                validate their hard work and achievements, opening doors to new
                opportunities in education and career advancement.
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
                  At HFPS, we are committed to providing a well-rounded
                  educational experience that prepares students for success in
                  all aspects of life. Here’s what you can expect from us:
                </p>
              </div>

              <div className='offer-list'>
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
                    <h4>Safety First</h4>
                    <p>
                      The safety and well-being of our students are our top
                      priorities. We are committed to providing a secure
                      learning environment where students can thrive both
                      academically and personally.
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
                    <h4>Interactive Classrooms</h4>
                    <p>
                      We believe in making learning engaging and interactive.
                      Our classrooms are equipped with the latest technology and
                      resources to create a dynamic, hands-on learning
                      environment that encourages active participation and
                      collaboration.
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
                    <h4>Ongoing Assessments and Feedback</h4>
                    <p>
                      Regular assessments and feedback ensure that students stay
                      on track and continue to grow. We monitor progress closely
                      and provide constructive feedback to help students improve
                      continuously, setting them up for long-term academic
                      success.
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
                    <h4>Extracurricular Activities</h4>
                    <p>
                      We believe that learning extends beyond the classroom, and
                      extracurricular activities play a key role in a student's
                      overall development. We offer a wide range of activities
                      designed to inspire creativity, foster teamwork, and
                      develop life skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='offer2'>
              <div className='offer2-head'>
                <h1>Welcome to His Favour Private School (HFPS)</h1>
              </div>
              <p>
                At HFPS, we are dedicated to nurturing the next generation of
                leaders, thinkers, and innovators. Our school provides a
                comprehensive education that combines academic excellence with
                personal growth, preparing students for a successful future in
                an ever-changing world.
              </p>
              <p>
                Founded with the vision of fostering a love for learning, we
                offer a dynamic and supportive environment where students are
                encouraged to explore, challenge themselves, and develop their
                full potential. Our experienced teachers, who are passionate
                about education, guide students through a curriculum designed to
                build both critical skills and character.
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
              <h1>Build A Brighter Future For Your Child</h1>
              <p>We are committed to providing an enriching educational</p>
              <p>experience that fosters growth, curiosity, and success.</p>
              {/* <p>
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth.
              </p> */}
              <div className='text-text'>
                <a>Enrol your child</a>
              </div>
            </div>
          </div>
        </div>

        <div className='courses'>
          <div className='course-head'>
            <h1 style={{ color: "#5d50c6" }}>
              Our <span style={{ color: "orange" }}> Classes</span>
            </h1>
            <p>
              Discover a world of learning at HFPS! Our classes are designed to
              inspire curiosity, foster creativity, and build strong foundations
              for academic success. Whether you're exploring sciences, arts, or
              extracurricular activities, there's something for every student to
              thrive and shine.
            </p>
          </div>
          <div className='course-box'>
            <div className='course-flex'>
              <div
                style={{
                  backgroundImage: "url(/images/course-2.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  margin: "0",
                  width: "250px",
                  height: "280px",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "20px"
                }}
              ></div>

              <div className='course-text'>
                <h1>Early Childhood Education (Nursery)</h1>
                <p style={{ color: "#000" }}>
                  Building Foundations for Learning
                </p>
                <p>
                  Our nursery program focuses on creating a safe, nurturing
                  environment where children develop social skills, creativity,
                  and basic literacy and numeracy. Activities are designed to
                  stimulate curiosity and build a love for learning.
                </p>
              </div>
            </div>

            <div className='course-flex'>
              <div
                style={{
                  backgroundImage: "url(/images/course-3.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  margin: "0",
                  width: "250px",
                  height: "280px",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "20px"
                }}
              ></div>

              <div className='course-text'>
                <h1> ⁠Primary Education </h1>
                <p style={{ color: "#000" }}>
                  Laying Strong Academic Foundations
                </p>
                <p>
                  Our primary school curriculum emphasizes critical thinking,
                  communication, and foundational knowledge in core subjects
                  like Mathematics, English, Basic Science, Social Studies, etc.
                  Interactive teaching methods ensure students stay engaged and
                  excited to learn.
                </p>
              </div>
            </div>

            <div className='course-flex'>
              <div
                style={{
                  backgroundImage: "url(/images/course-4.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  margin: "0",
                  width: "250px",
                  height: "280px",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "20px"
                }}
              ></div>

              <div className='course-text'>
                <h1> Extracurricular Activities </h1>
                <p style={{ color: "#000" }}>Developing Comprehensive Skills</p>
                <p>
                  We believe in nurturing well-rounded individuals. Our
                  extracurricular programs include sports, drama, debates,
                  excursions, etc. Students can also participate in workshops to
                  build essential life skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='experience'>
          <div
            style={{
              backgroundImage: "url(/images/bg_4.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "50% -138.1px",
              margin: "0",
              height: "480px",
              paddingBottom: "50px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className='experience-box'>
              <div className='exp1'>
                <h1>
                  15+ Years of<span style={{ color: "#000" }}> Excellence</span>
                </h1>
                <p>
                With a legacy of quality education, we are commited to nurturing leaders and innovators for a brighter future.
                </p>
              </div>
              <div className='exp2'>
                <div className='num-exp'>
                  <p>15+</p>
                  <span>Certified Teachers</span>
                </div>

                <div className='num-exp'>
                  <p>100+</p>
                  <span>Successful Kids</span>
                </div>

                <div className='num-exp'>
                  <p>50+</p>
                  <span>Happy Parents</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='feedback'>
          <div className='feed-head'>
            <h1 style={{ color: "#5d50c6" }}>
              What Parents <span style={{ color: "orange" }}>Say About Us</span>
            </h1>
            <p>
            At HFPS, we are proud of the positive impacts we’ve made on our students. Here’s what our parents have to say:
            </p>
          </div>

          <Feedback />
        </div>

        {/* <div className='pricing'>
          <div className='price-head'>
            <h1 style={{ color: "#5d50c6" }}>
              Our <span style={{ color: "orange" }}>Pricing</span>
            </h1>
            <p>
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the
            </p>
            <p>necessary regelialia. It is a paradisematic country</p>
          </div>

          <div className='price-box'>
            <div className='price1'>
              <h3>Basic</h3>
              <h4 style={{ color: "#1eaaf1" }}>
                $24.50 <sub>/ 5mos</sub>{" "}
              </h4>
              <div
                style={{
                  backgroundImage: "url(/images/bg_1.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  margin: "0",
                  width: "100%",
                  height: "150px",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>

              <a>Take a Course</a>
            </div>

            <div className='price2'>
              <h3>Standard</h3>
              <h4 style={{ color: "#1eaaf1" }}>
                $24.50 <sub>/ 5mos</sub>{" "}
              </h4>
              <div
                style={{
                  backgroundImage: "url(/images/bg_2.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  margin: "0",
                  width: "100%",
                  height: "150px",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>

              <a>Take a Course</a>
            </div>

            <div className='price3'>
              <h3>Premium</h3>
              <h4 style={{ color: "#1eaaf1" }}>
                $24.50 <sub>/ 5mos</sub>{" "}
              </h4>
              <div
                style={{
                  backgroundImage: "url(/images/course-3.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  margin: "0",
                  width: "100%",
                  height: "150px",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>

              <a>Take a Course</a>
            </div>

            <div className='price4'>
              <h3>Platinum</h3>
              <h4 style={{ color: "#1eaaf1" }}>
                $24.50 <sub>/ 5mos</sub>{" "}
              </h4>
              <div
                style={{
                  backgroundImage: "url(/images/teacher-1.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  margin: "0",
                  width: "100%",
                  height: "150px",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>

              <a>Take a Course</a>
            </div>
          </div>
        </div> */}

        <div className='grid-pics'>
          <div
            style={{
              backgroundImage: "url(/images/course-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              margin: "0",
              width: "100%",
              height: "280px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            style={{
              backgroundImage: "url(/images/image_2.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              margin: "0",
              width: "100%",
              height: "280px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            style={{
              backgroundImage: "url(/images/image_3.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              margin: "0",
              width: "100%",
              height: "280px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            style={{
              backgroundImage: "url(/images/image_4.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              margin: "0",
              width: "100%",
              height: "280px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
      <Footer />
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
