import { useState } from 'react'
import {React} from 'react'
const Input = (props) => {
   
   
   
      
  

    return (
       <div>
           
            <label>{props.name}</label>
            <input type={props.type} placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            
             />
        </div>
    )
}
export default Input;