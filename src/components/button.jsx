import { useState } from 'react'
import '../css/button.css'
const Button = (props) => {
   const [text,setText]=useState("marquise")
   
  function handleClick (){
    setText("eddy")
   }
    
    return (
        <button className={props.color}type="submit"onClick={handleClick}>{props.name}</button>
    )
}
export default Button