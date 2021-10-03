import React from 'react'

const Intro = ({title, description}) => {
    return (
        <div className="intro">
            <h2>{title}</h2>
            <hr />
            <p>{description}</p>
        </div>
    )
}

export default Intro