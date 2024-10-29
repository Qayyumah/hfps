import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../assets/pricing.css'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const Pricing = () => {
  return (
    <div>
      <Header/>
      <div>
        <div className='price-head-img'>
          <div className='price-head-flex'>
            <div style={{
                backgroundImage:'url(/images/bg_2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition:'center center',
                margin:'0',
                width:'100%',
                height:'300px',
                backgroundRepeat:'no-repeat',
            }}>
        
              <div className='price-head-text'>
                  <h1>Pricing</h1>
                <div className='price-head-link'>
                  <Link to='/'>HOME <IoIosArrowForward style={{marginTop:'5px'}}/></Link>
                  <p>PRICING <IoIosArrowForward/></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pricing'>
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
      </div>
      <Footer/>
    </div>
  )
}

export default Pricing