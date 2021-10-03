import React from 'react'
import Intro from './Common/Intro'
import map from '../assets/images/map-55e32ae4c19a85738ebb72d3172e3ab7.png'
import one from '../assets/images/1.png'
import two from '../assets/images/22.png'
import three from '../assets/images/3.png'
import qute from '../assets/images/qute.png'
const Client = () => {
    return (
        <div className="client">
            <div className="section">
               <div className="container">
                <Intro  title="What My Client Says" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation."/>
                <div className="content">
                    <div className="img_wrapper">
                        <div className="map_img">
                            <img src={map} alt="" />
                        </div>
                        <img src={one} alt="" className=" xl_img one"/>
                        <img src={two} alt="" className="xl_img two" />
                        <img src={three} alt="" className="lg_img three" /> 
                        <img src={three} alt="" className="lg_img four" /> 
                        <img src={one} alt="" className="md_img " />
                        <img src={two} alt="" className="sm_img  six" />
                    </div>
                    <div className="text_wrapper">
                        <img src={qute} alt="" />
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo. </p>
                        <img src={qute} alt="" className="after"/>
                    </div>
                </div>
               </div>
            </div>
          
        </div>
    )
}

export default Client
