import React from 'react'
import linkden from '../assets/images/linked in.png'
import behance from '../assets/images/behance.png'
import dribbble from '../assets/images/dribbble.png'
import insta from '../assets/images/insta.png'
import pinterest from '../assets/images/pinterest.png'

const Footer = () => {
    return (
        <div className="footer">
            <hr className="red_line"/>
            <h2>Portfolio</h2>
            <ul>
                <li><a>about</a></li>
                <li>|</li>
                <li><a>portfoli</a></li>
                <li>|</li>
                <li><a>contact</a></li>
            </ul>
            <p>NY / +1 123456 7890 / hello@graphics.studio.com</p>
            <div className="socail_icons">
                <img src={behance}></img>
                <img src={dribbble}></img>
                <img src={insta}></img>
                <img src={linkden}></img>
                <img src={pinterest}></img>
           </div>
           <hr className="last_line"/>
           <h5>Copyright © 2019 Graphics Studio | All rights reserved</h5>
        </div>
    )
}

export default Footer
