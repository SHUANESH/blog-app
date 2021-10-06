import { useEffect ,useState} from "react";
import axios from "axios";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [category, setCategory] = useState([]);

  useEffect(()=>{
   const getCategory = async()=>{
     const results =  await axios.get("/categories");
     setCategory(results.data.data);
   }
   getCategory();
  },[])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/3773655/pexels-photo-3773655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          inventore dolore tempore.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
          category.map((item)=>{
            return <Link key={item._id} to={`/?categories=${item.name}`} className="link"> <li className="sidebarListItem">{item.name}</li> </Link>
         })
         }
        </ul>
      </div>
      <div className="sidebar">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcons fab fa-facebook-square"></i>
          <i className="sidebarIcons fab fa-linkedin"></i>
          <i className="sidebarIcons fab fa-pinterest-square"></i>
          <i className="sidebarIcons fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
