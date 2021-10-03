import React from 'react'

import top_img from "../assets/images/top_img.png"
import ellipse from '../assets/images/Ellipse 1@1X.png'
import layer2 from "../assets/images/Layer 2.png"
import hero_img from '../assets/images/Layer 4.png'
import linkden from '../assets/images/linked in.png'
import behance from '../assets/images/behance.png'
import dribbble from '../assets/images/dribbble.png'
import insta from '../assets/images/insta.png'
import pinterest from '../assets/images/pinterest.png'
import Navbar from './Navbar'
import Button from './Common/Button'

const HeroWrapper = () => {
    return (
        <div className="hero_wrapper">
            <Navbar />
            <div className="top_img">
                <img src={top_img} alt="img"/>
            </div>
            <div className="ellipse">
                <img src={ellipse} alt="img"/>
            </div>
            <div className="layer2">
                <img src={layer2} alt="img"/>
            </div>
            <div className="container">
                
                    <div className="content_wrapper">
                        <div className="content">
                            <h2>Hello, I am</h2>
                            <h1>Mark Reccardo</h1>
                            <p>A young <span> UI/UX </span> designer with crazy for mobile & web design.</p>
                            <h3>Find Me on</h3>
                            <div className="socail_icons">
                                <img src={behance}></img>
                                <img src={dribbble}></img>
                                <img src={insta}></img>
                                <img src={linkden}></img>
                                <img src={pinterest}></img>
                            </div>
                            <div className="btn_group">
                                <Button btnText="Hire Me" btnType="primary" padding="10px 45px"/>
                                <Button btnText="portfolio" btnType="outline" padding="10px 45px"/>
                            </div>
                        </div>
                        <div className="hero_img">
                            <img src={hero_img} />
                        </div>
                    </div>
             
            </div>
        </div>
    )
}

export default HeroWrapper
