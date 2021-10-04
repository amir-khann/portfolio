import React from 'react'
import CapabilitesCard from './Common/CapabilitesCard'
import Intro from './Common/Intro'

const Capabilities = () => {
    return (
        <div className="capabilities">
            <div className="section">
                <Intro title="My Capabilities" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation."/>  
                <div className="container">
                    <div className="card_wrapper">
                        <CapabilitesCard />
                        <CapabilitesCard />
                        <CapabilitesCard />
                        <CapabilitesCard />
                        <CapabilitesCard />
                        <CapabilitesCard />
                    </div>   
                    
                </div>
            </div>
             
        </div>
    )
}

export default Capabilities
