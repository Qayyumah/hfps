import React from "react";
import Header from "./Header";
import { MdCheckCircleOutline } from "react-icons/md";
import Footer from "./Footer";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "../assets/about.css";
import Feedback from "./Feedback";

const About = () => {
  return (
    <div>
      <Header />
      <div>
        <div className='about-header-img'>
          <div className='about-flex'>
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
              <div className='about-text'>
                <h1>About Us</h1>
                <div className='about-link'>
                  <Link to='/'>
                    HOME <IoIosArrowForward style={{ marginTop: "5px" }} />
                  </Link>
                  <p>
                    ABOUT US <IoIosArrowForward />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                <h1>Welcome to His Favour Private School</h1>
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
              <p>
                We believe in a holistic approach to education, where every
                child’s physical, emotional, and intellectual needs are
                addressed. We maintain a safe, clean, and welcoming environment
                where every student feels valued and respected.
              </p>
              <p>
                Through a wide range of extracurricular activities, from sports
                and arts to leadership programs and community service, students
                have the opportunity to expand their horizons and develop
                important life skills beyond the classroom.
              </p>
              <p>
                At HFPS, we are more than just a school—we are a community. Our
                commitment to excellence, safety, and holistic education makes
                us the ideal place for your child to grow, learn, and succeed.
              </p>
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
                  With a legacy of quality education, we are commited to
                  nurturing leaders and innovators for a brighter future.
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
            <h4>TESTIMONIAL</h4>
            <h1 style={{ color: "#5d50c6" }}>
              What Parents <span style={{ color: "orange" }}>Say About Us</span>
            </h1>
            <p>
              At HFPS, we are proud of the positive impacts we’ve made on our
              students. Here’s what our parents have to say:
            </p>
          </div>

          <Feedback />
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
      </div>
      <Footer />
    </div>
  );
};

export default About;
