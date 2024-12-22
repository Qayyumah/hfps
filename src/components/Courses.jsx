import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "../assets/courses.css";

const Courses = () => {
  return (
    <div>
      <Header />
      <div>
        <div className='course-header-img'>
          <div className='course-flex-head'>
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
              <div className='course-text-head'>
                <h1>Our Classes</h1>
                <div className='course-link-head'>
                  <Link to='/'>
                    HOME <IoIosArrowForward style={{ marginTop: "5px" }} />
                  </Link>
                  <p>
                    CLASSES <IoIosArrowForward />
                  </p>
                </div>
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

export default Courses;
