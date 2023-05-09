import { useState } from 'react'
import {React} from 'react'
const Input = (props) => {
    const[value,setValue]=useState("")
   function showData(e){
    
setValue(e.target.value) 
   
   }
   console.log(value)
   localStorage.setItem("user",value)
    return (
        <form>
            <h2>{value}</h2>
            <label>{props.name}</label>
            <input type={props.type} placeholder={props.placeholder}id={props.id}
            onChange={showData}
            
             />
        </form>
    )
}
export default Input;