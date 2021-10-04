import React from 'react'
import Button from './Common/Button'
const Form = () => {
    return (
        <div className="form_wrapper">
           <div className="section" id="contact">
               <div className="form">
                   <hr />
                   <h2>Let’s Make Something
                     Great Together</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et t enim ad minim veniam, quis nostrud exercitation.
                   </p>
                   <form>
                      <div className="input_wrapper">
                        <input type="text"  placeholder="Name" />
                        <input type="text"   placeholder="Email"/>
                        <input type="text"   placeholder="Phone#"/>
                        <input type="text"   placeholder="budget"/>
                      </div>
                      <textarea placeholder="Message..."></textarea>
                   </form>
                   <Button  btnText="Hire me" btnType="primary"/>
               </div>

           </div>
        </div>
    )
}

export default Form
