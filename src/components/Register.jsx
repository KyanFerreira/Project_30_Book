/* TODO - add your code to create a functional React component that renders a registration form */
import { useEffect, useState } from "react";

const Register = ({setToken}) => {
  
  async function registerUser(e) {
    e.preventDefault();
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let emailValue = document.getElementById("email").value;
    let passwordValue = document.getElementById("password").value;
  

    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            email: emailValue,
            password: passwordValue,
          }),
        }
      );
      const result = await response.json();
      setToken(result.token);
    } catch (e) {
      //Do nothing
    }
  }

  //What will be returned to the App page
  return (
    <>
      <h1> Register Page</h1>
      <form className="RegisterForm">
        <label htmlFor="firstname">First Name:</label>
        <input type="text" id="firstname" name="firstname"></input>
        <br></br>
        <br></br>
        <label htmlFor="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname"></input>
        <br></br>
        <br></br>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email"></input>
        <br></br>
        <br></br>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password"></input>
        <br></br>
        <br></br>
        <button  onClick={(e) => registerUser(e)}>Register</button>
      </form>
    </>
  );
};

export default Register;
