import React, { useState } from 'react'
import Button from './Common/Button'
import Card from './Common/Card'
import img1 from '../assets/images/abad.png'
import img2 from '../assets/images/shot_25_artlab_minisite.png'
import img3 from '../assets/images/apri.png'
import img4 from '../assets/images/nalie.png'
import img5 from '../assets/images/v1.png'
import img6 from '../assets/images/bane.png'

const Portfolio = () => {

    const [show, setShow] = useState('all')
    let all = [img1,img2,img3,img4,img5,img6]
    let logo = [img3,img4,img5,img6]
    let website = [img5]
    let app = [img1,img2,img3,img4,img5,img6]


    return (
        <div className="portfolio">
            <div className="section" id="portfolio">
                <div className="container">
                    <div className="portfolio_header">
                        <div className="links_wrapper">
                            <div className="title">
                                <h2>protfolio</h2>
                                <div className="line"></div>
                            </div>
                            <div className="links">
                                <ul>
                                    <li><a onClick={()=>{setShow("all")}} className={show ==="all" ? "active":""}>all</a></li>
                                    <li><a onClick={()=>{setShow("logo")}} className={show ==="logo" ? "active":""}>Logo</a></li>
                                    <li><a onClick={()=>{setShow("website")}} className={show ==="website" ? "active":""}>Websites</a></li>
                                    <li><a onClick={()=>{setShow("app")}} className={show ==="app" ? "active":""}>Mobile Apps</a></li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="arrow">
                            <Button  btnText="<" btnType="outline"  /> 
                            <Button  btnText=">" btnType="primary"  /> 
                        </div>
                    </div>
                    <div className="cards">
                      { show === "all" && all.map((item) =>(
                          <Card  image={item}/>
                           ))}

                    { show === "logo" && logo.map((item) =>(
                          <Card  image={item}/>
                           ))}
                    { show === "website" && website.map((item) =>(
                    <Card  image={item}/>
                    ))}
                    { show === "app" && app.map((item) =>(
                    <Card  image={item}/>
                    ))}
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Portfolio
