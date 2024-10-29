import React from 'react'
import { IoMdMap } from 'react-icons/io'
import { MdArrowForward, MdCalendarMonth, MdMail, MdMessage, MdPerson, MdPhone } from 'react-icons/md'
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'
import '../assets/footer.css'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='foot'>
            <div className='questions'>
                <div className='q-head'>
                    <h1>Have a Questions?</h1>
                </div>
                <div className='q-display'>
                    <IoMdMap style={{marginTop:'-20px', fontSize:'20px'}}/>
                    <div className='q-text'>
                        <p style={{marginBottom:'0'}}>	203 Fake St. Mountain View, San</p>
                        <p style={{marginTop:'0'}}>Francisco, California, USA</p>
                    </div>
                </div>

                <div className='q-display'>
                    <MdPhone style={{fontSize:'20px'}}/>
                    <div className='q-text'>
                        <p>+2 392 3929 210</p>
                    </div>
                </div>

                <div className='q-display'>
                    <MdMail style={{fontSize:'20px'}}/>
                    <div className='q-text'>
                        <p>	info@yourdomain.com</p>
                    </div>
                </div>
            </div>

            <div className='rec-blo'>
                <div className='rec-head'>
                    <h1>Recent Blog</h1>
                </div>
                <div className='blo-display'>
                    <img src='/images/image_1.jpg'/>
                    <div className='rec-text'>
                        <p>Even the all-powerful Pointing has no control about</p>

                        <div className='cal-ad-msg'>
                                <div className='calendar'>
                                <MdCalendarMonth/>
                                <span>Dec 25 2018</span>
                            </div>
                            <div className='admin'>
                                <MdPerson/>
                                <span>Admin</span>
                            </div>
                            <div className='message'>
                                <MdMessage/>
                                <span>19</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='blo-display'>
                    <img src='/images/image_1.jpg'/>
                    <div className='rec-text'>
                        <p>Even the all-powerful Pointing has no control about</p>

                        <div className='cal-ad-msg'>
                                <div className='calendar'>
                                <MdCalendarMonth/>
                                <span>Dec 25 2018</span>
                            </div>
                            <div className='admin'>
                                <MdPerson/>
                                <span>Admin</span>
                            </div>
                            <div className='message'>
                                <MdMessage/>
                                <span>19</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='links'>
                <div className='link-head'>
                    <h1>Links</h1>
                </div>
                <div className='link-list'>
                    <MdArrowForward />
                    <a>Home</a>
                </div>
                <div className='link-list'>
                    <MdArrowForward/>
                    <a>About</a>
                </div>
                <div className='link-list'>
                    <MdArrowForward/>
                    <a>Services</a>
                </div>
                <div className='link-list'>
                    <MdArrowForward/>
                    <a>Departments</a>
                </div>
                <div className='link-list'>
                    <MdArrowForward/>
                    <a>Contact</a>
                </div>
            </div>

            <div className='sub-us'>
                <div className='sub-head'>
                    <h1>Subscribe Us!</h1>
                </div>
                <div className='sub-i-b'>
                    <input placeholder='Enter email address'/>
                    <button>Subscribe</button>
                </div>
                <div className='connect'>
                    <h1>Connect With Us</h1>
                    <div className='connect-ico'>
                        <div className='twitter'>
                            <TiSocialTwitter style={{
                                fontSize:'20px'
                            }}/>
                        </div>
                        <div className='fb'>
                            <TiSocialFacebook style={{
                                fontSize:'20px'
                            }}/>
                        </div>
                        <div className='insta'>
                            <TiSocialInstagram style={{
                                fontSize:'20px'
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='foot-text'>
                <p>Copyright ©2024 All rights reserved | This template is made with🤍by Colorlib</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer