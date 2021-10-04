import React from 'react'

import logo from '../assets/images/Portfolio@1X.png'
import Button from './Common/Button'

const Navbar = () => {
    return (
        // <div class="container">
        //     <div class="nav">
        //     <input type="checkbox" id="nav-check" />
        //     <div class="nav-header">
        //         <div class="nav-title">
        //         <img src={logo} className="logo"/>
        //         </div>
        //     </div>
        //     <div class="nav-btn">
        //         <label for="nav-check">
        //         <span></span>
        //         <span></span>
        //         <span></span>
        //         </label>
        //     </div>
            
        //     <div class="nav-links">
        //         <a href="" target="_blank">About</a>
        //         <a href="" target="_blank">portfolio</a>
        //         <a href="" target="_blank">Contact</a>
        //     </div>
        //   </div>
        // </div>

        <div className="container">
            <nav className="navbar">
                <div className="logo">
                    <a src="#"><img src={logo} className="logo"></img></a>
                </div>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#footer"><Button  btnText="Get started" btnType="outline"/></a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar
 