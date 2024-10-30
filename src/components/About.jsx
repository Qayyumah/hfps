import React from 'react'
import Header from './Header'
import { MdCheckCircleOutline } from 'react-icons/md'
import Footer from './Footer'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import '../assets/about.css'
import Feedback from './Feedback'

const About = () => {
  return (
    <div>
        <Header/>
        <div>
            <div className='about-header-img'>
                <div className='about-flex'>
                    <div style={{
                        backgroundImage:'url(/images/bg_2.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition:'center center',
                        margin:'0',
                        width:'100%',
                        height:'300px',
                        backgroundRepeat:'no-repeat',
                    }}>
                
                        <div className='about-text'>
                            <h1>About Us</h1>
                            <div className='about-link'>
                                <Link to='/'>HOME <IoIosArrowForward style={{marginTop:'5px'}}/></Link>
                                <p>ABOUT US <IoIosArrowForward/></p>
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
                            <p>On her way she met a copy. The copy warned the Little Blind Text, 
                                that where it came from it would have been rewritten a thousand 
                                times and everything that was left from its origin would be the word.
                            </p>
                        </div>
                        <div className='offer-list'>
                            <div className='lists'>
                                <MdCheckCircleOutline style={{
                                    backgroundColor:'blue',
                                    marginTop:'-50px',
                                    width:'20px',
                                    height:'10px',
                                    padding:'30px',
                                    borderRadius:'100%'
                                }}/>
                                <div className='list-text'>
                                    <h4>Safety First</h4>
                                    <p>Far far away, behind the word mountains, 
                                    far from the countries Vokalia.</p>
                                </div>
                            </div>

                            <div className='lists'>
                                <MdCheckCircleOutline style={{
                                    backgroundColor:'blue',
                                    marginTop:'-50px',
                                    width:'20px',
                                    height:'10px',
                                    padding:'30px',
                                    borderRadius:'100%'
                                }}/>
                                <div className='list-text'>
                                    <h4>Regular Classes</h4>
                                    <p>Far far away, behind the word mountains, 
                                    far from the countries Vokalia.</p>
                                </div>
                            </div>

                            <div className='lists'>
                                <MdCheckCircleOutline style={{
                                    backgroundColor:'blue',
                                    width:'20px',
                                    marginTop:'-50px',
                                    height:'10px',
                                    padding:'30px',
                                    borderRadius:'100%'
                                }}/>
                                <div className='list-text'>
                                    <h4>Certified Teachers</h4>
                                    <p>Far far away, behind the word mountains, 
                                    far from the countries Vokalia.</p>
                                </div>
                            </div>

                            <div className='lists'>
                                <MdCheckCircleOutline style={{
                                    backgroundColor:'blue',
                                    width:'20px',
                                    marginTop:'-50px',
                                    height:'10px',
                                    padding:'30px',
                                    borderRadius:'100%'
                                }}/>
                                <div className='list-text'>
                                    <h4>Sufficient Classrooms</h4>
                                    <p>Far far away, behind the word mountains, 
                                    far from the countries Vokalia.</p>
                                </div>
                            </div>

                            <div className='lists'>
                                <MdCheckCircleOutline style={{
                                    backgroundColor:'blue',
                                    width:'20px',
                                    marginTop:'-50px',
                                    height:'10px',
                                    padding:'30px',
                                    borderRadius:'100%'
                                }}/>
                                <div className='list-text'>
                                    <h4>Creative Lessons</h4>
                                    <p>Far far away, behind the word mountains, 
                                    far from the countries Vokalia.</p>
                                </div>
                            </div>

                            <div className='lists'>
                                <MdCheckCircleOutline style={{
                                    backgroundColor:'blue',
                                    width:'20px',
                                    marginTop:'-50px',
                                    height:'10px',
                                    padding:'30px',
                                    borderRadius:'100%'
                                }}/>
                                <div className='list-text'>
                                    <h4>Sports Facilities</h4>
                                    <p>Far far away, behind the word mountains, 
                                    far from the countries Vokalia.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='offer2'>
                        <div className='offer2-head'>
                            <h1>Welcome to His Favour Private School</h1>
                        </div>
                        <p>
                            On her way she met a copy. The copy warned the Little Blind Text, 
                            that where it came from it would have been rewritten a 
                            thousand times and everything that was left from its origin would be the word.
                        </p>
                        <p>
                            Separated they live in Bookmarksgrove right at the coast of the 
                            Semantics, a large language ocean. A small river named Duden flows 
                            by their place and supplies it with the necessary regelialia. 
                            And if she hasn’t been rewritten, then they are still using her.
                        </p>

                        <div className='offer2-btn'>
                            <a>Read More</a>
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
                    <h4>TESTIMONIAL</h4>
                    <h1 style={{color: '#5d50c6'}}>What Parents <span style={{color:'orange'}}>Say About Us</span></h1>
                    <p>Separated they live in. A small river named Duden flows by their place and supplies it with the</p>
                    <p>necessary regelialia. It is a paradisematic country</p>
                </div>

                <Feedback/>
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
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About