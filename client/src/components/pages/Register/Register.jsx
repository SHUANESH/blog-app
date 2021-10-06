import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Register = () => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userError, setUserError] = useState(false);

  
  const handlerSubmit = async(e) => {
     e.preventDefault();
     setUserError(true);
     try {
      const res = await axios.post("/auth/registrar" , {
        username: username,
        email:  userEmail,
        password: userPassword,
      });
      res.data && window.location.replace("/login")
      console.log(res);
     } catch (error) {
       console.error(error.message);
       
     }

  };

  return (
    <div className="register">
      <span className="registerTitle">register</span>
      <form className="registerForm" onSubmit={handlerSubmit}>
        <label htmlFor="">User Name</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your user name..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>

      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {userError && <span style={{color:"black" ,marginTop:"10px" ,fontSize:"20px" , fontWeight:"700"}}>Something went wrong!</span>}
    </div>
  );
};

export default Register;
