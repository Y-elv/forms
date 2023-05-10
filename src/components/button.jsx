import { useState } from 'react'
import '../css/button.css'
const Button = (props) => {
   
   
  
    
    return (
        <button type="submit"onClick={props.handleClick}>{props.name}</button>
    )
}
export default Button