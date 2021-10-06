import "./Login.css";
import { Link } from "react-router-dom";
import {Context} from "../../context/Context";
import {LOGIN_START ,LOGIN_SUCCESS, LOGIN_FAILURE} from "../../context/Cases"
import { useContext, useRef } from "react";
import axios from "axios";


const Login = () => {

const userRef = useRef();
const passwordRef = useRef();
const {dispatch, isFetching} = useContext(Context);

const handleSubmit =async(e)=>{
   e.preventDefault();
   dispatch({type:LOGIN_START});
   try {
     const res=await axios.post("/auth/login" , {
       username: userRef.current.value,
       password: passwordRef.current.value,
     });
     dispatch({type:LOGIN_SUCCESS, payload: res.data});
   } catch (error) {
    dispatch({type:LOGIN_FAILURE}); console.log(error);
   }
}
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your Username..."
          ref={userRef}
        />
        <label htmlFor="">Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
           Login
        </button>
      </form>

      <button className="loginRegisterButton">
        <Link className="link" to="/register">
            Register
        </Link>
        </button>
    </div>
  );
};

export default Login;
