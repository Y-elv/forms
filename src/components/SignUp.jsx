import '../css/SignUp.css';
import Button from './button';
import Input from './input';
import React, { useState } from 'react';

const SignUp = () => {
  const [values, setValues] = useState(
    {

  }
  );

const handleChange = (event) => {
  event.preventDefault()
  const data = event.target.value
  setValues({ ...values, 
    [event.target.name] : data });
};
 

  const handleSubmit = (event) => {
    
    event.preventDefault()
    
    console.log(values.email)
  };

  return (
    <div className="container">
      <div className="upper">
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account.</p>
      </div>
      <form action='' onSubmit={handleSubmit}>
      <div className="middle">
        <Input
          name="email"
          type="text"
          placeholder="enter email"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
        <Input
          name="repeatPassword"
          type="password"
          placeholder="repeat password"
          value={values.repeatPassword}
          onChange={handleChange}
        />
      </div>
      <div className="last">
        <label>Remember me</label> <input type="checkbox" id="check" name="check" />
        <p>
          By creating an account you agree to our <span>Terms & Privacy</span>
        </p>
      </div>
      <Button name="cancel" color="green"type="button" />
      <Button name="sign up" color="red" type="submit"  />
      </form>
    </div>
  );
};

export default SignUp;






