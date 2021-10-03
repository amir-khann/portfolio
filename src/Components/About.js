import React from 'react'
import about from '../assets/images/about.png'
import Button from './Common/Button'

const About = () => {
    return (
        <div className="about">
            <div className="section">
                <div className="container">
                    <div className="content">
                        <div className="head">
                            <div>
                                <h2>About Me</h2>
                            </div>
                            <div className="line"></div>
                        </div>
                        <div className="description">
                           <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                           </p>
                           <p>
                               
                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                           </p>
                           <div className="download_btn">
                               <Button btnText="Download CV" btnType="outline" padding="15px 20px"/>
                           </div>
                        </div>
                       
                    </div>
                    <div className="about_img">
                        <img src={about} alt="" />
                        
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default About
