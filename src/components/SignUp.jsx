import '../css/SignUp.css'
import Button from './button'
import Input from './input'
import React, { useState } from 'react';


const Signup = () => {

    let arr = [];

    




        
       
   
    return (
        <div className="container">
            <div className='upper'>
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account.</p>
            </div>
            <div className='middle'>
                <Input
                    name="email"
                    type="text"
                    placeholder="enter email"
                    id="email"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="password"
                    id="password"
                />
                <Input
                    name="Repeat password"
                    type="password"
                    placeholder="repeat password"
                    id="repeat"
                />

            </div>
            <div className='last'>
                <label>Remember me</label> <input type="checkbox" id="check" name="check"></input>
                <p>By creating an account you agree to our <span>Terms & Privacy</span></p>
    
                </div>
                <Button 
                    name="cancel"
                    color="green"
                    
                />
                <Button 
                    name="sign up"
                    color="red"
                   
                  
                />
                  
           
        </div>
    )
}
export default Signup