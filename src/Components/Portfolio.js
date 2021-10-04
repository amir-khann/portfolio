import React from 'react'
import Button from './Common/Button'
import Card from './Common/Card'
import abad from '../assets/images/abad.png'
import shot from '../assets/images/shot_25_artlab_minisite.png'
import apri from '../assets/images/apri.png'


const Portfolio = () => {

    return (
        <div className="portfolio">
            <div className="section">
                <div className="container">
                    <div className="portfolio_header">
                        <div className="links_wrapper">
                            <div className="title">
                                <h2>protfolio</h2>
                                <div className="line"></div>
                            </div>
                            <div className="links">
                                <ul>
                                    <li><a>all</a></li>
                                    <li><a>Logo</a></li>
                                    <li><a>Websites</a></li>
                                    <li><a>Mobile Apps</a></li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="arrow">
                            <Button  btnText="<" btnType="outline"  /> 
                            <Button  btnText=">" btnType="primary"  /> 
                        </div>
                    </div>
                    <div className="cards">
                        <Card  image={abad}/>
                        <Card image={shot}/>
                        <Card image={apri}/>
                        <Card  image={abad}/>
                        <Card image={shot}/>
                        <Card image={apri}/>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Portfolio
