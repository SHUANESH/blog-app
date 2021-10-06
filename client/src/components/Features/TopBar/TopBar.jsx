import "./TopBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {Context} from "../../context/Context"

const TopBar = () => {
  const {user, dispatch} = useContext(Context);

  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className="top-bar">
      <div className="top-left">
        <i className="topIcons fab fa-facebook-square"></i>
        <i className="topIcons fab fa-linkedin"></i>
        <i className="topIcons fab fa-pinterest-square"></i>
        <i className="topIcons fab fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
      
          </li>
          <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="top-right">
        {
          user?(
            <img
            className="topImg"
            src={user.data.profileImg}
            alt=""
          />
          ): (
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to="/register">
                 Register
              </Link>                
              </li>
              <li className="topListItem">
              <Link className="link" to="/login">
                 Login
              </Link>                
              </li>

          </ul>
          )
        }

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
