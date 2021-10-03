import React from 'react'


const Card = ({image}) => {
    return (
        <div className="portfolio_card">
            <div>
                <img src={image}></img>
            </div>
            <div className="overlay">
                <div className="overlay_content">
                    <h2>-Sed ut Perspiciatis</h2>
                    <p>Branding, Web Design</p>
                </div>
            </div> 
        </div>
    )
}

export default Card
