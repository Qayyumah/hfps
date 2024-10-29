import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import '../assets/courses.css'

const Courses = () => {
  return (
    <div>
        <Header/>
        <div>

            <div className='course-header-img'>
                <div className='course-flex-head'>
                    <div style={{
                        backgroundImage:'url(/images/bg_2.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition:'center center',
                        margin:'0',
                        width:'100%',
                        height:'300px',
                        backgroundRepeat:'no-repeat',
                    }}>
                
                        <div className='course-text-head'>
                            <h1>Our Courses</h1>
                            <div className='course-link-head'>
                                <Link to='/'>HOME <IoIosArrowForward style={{marginTop:'5px'}}/></Link>
                                <p>COURSES <IoIosArrowForward/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='courses'>
                <div className='course-boxx'>
                    <div className='course-flexx'>
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

                    <div className='course-flexx'>
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

                    <div className='course-flexx'>
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

                    <div className='course-flexx'>
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

                    <div className='course-flexx'>
                    <div style={{
                        backgroundImage:'url(/images/course-5.jpg.webp)',
                        backgroundSize: 'cover',
                        backgroundPosition:'center center',
                        margin:'0',
                        width:'250px',
                        height:'280px',
                        backgroundRepeat:'no-repeat',
                    }}>
                    </div>
                    
                    <div className='course-text'>
                        <h1>Study Lesson</h1>
                        <p style={{color:'orange'}}>Class time: <span style={{color:'#000'}}>9:00am - 10am</span></p>
                        <p>Separated they live in. A small river named Duden flows 
                        by their place and supplies it with the necessary regelialia. 
                        It is a paradisematic country</p>
                    </div>
                    </div>

                    <div className='course-flexx'>
                    <div style={{
                        backgroundImage:'url(/images/course-6.jpg.webp)',
                        backgroundSize: 'cover',
                        backgroundPosition:'center center',
                        margin:'0',
                        width:'250px',
                        height:'280px',
                        backgroundRepeat:'no-repeat',
                    }}>
                    </div>
                
                    <div className='course-text'>
                        <h1>Experiment Lesson</h1>
                        <p style={{color:'orange'}}>Class time: <span style={{color:'#000'}}>9:00am - 10am</span></p>
                        <p>Separated they live in. A small river named Duden flows 
                        by their place and supplies it with the necessary regelialia. 
                        It is a paradisematic country</p>
                    </div>

                    
                </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Courses