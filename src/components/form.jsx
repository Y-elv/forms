
import React, { useState } from "react";
import Button from "./butt.jsx";
import Input from "./enter.jsx";

function Form() {
  const [value, setValue] = useState({
    email: "",
    password: "",
    repassword: "",
  });
  const[arr,setArr]=useState([])


  function handleChange(e) {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
    
  }
  function handleSubmit(e){
    e.preventDefault()
   arr.push(value)
    console.log(arr)
    const newUsers={
      name:value.name,
      email: value.email,
    password:value.password,
    repassword:value.repassword
    }
    setArr((prevArr)=>[...prevArr,newUsers])
    localStorage.setItem("values",JSON.stringify([...arr,newUsers]))
       setValue({emai:"",password:"",repassword:""})
  }

  return (
    <>
    <div className="upper">
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account.</p>
      </div>
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="email"
        place="email"
        value={value.email}
        onChange={handleChange}
       
      />
      <Input
      name="password"
        type="password"
        place="password"
        value={value.password}
        onChange={handleChange}
       
      />
      <Input
      name="repassword"
        type="password"
        place="re-password"
        value={value.repassword}
        onChange={handleChange}

      
      />
       <div className="last">
     <label>Remember me</label> <input type="checkbox" id="check" name="check" />
     <p>
       By creating an account you agree to our <span>Terms & Privacy</span>
     </p>
   </div>
      <Button name="cancel" type="button"/>
      <Button name="signup"  type="submit"/>
    </form>
   
   </>
  );
};

export default Form;