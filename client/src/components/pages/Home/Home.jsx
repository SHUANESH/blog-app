import './Home.css'
import Header from "../../Features/Header/Header";
import Posts from "../../Features/Posts/Posts";
import SideBar from "../../Features/SideBar/SideBar";
import {useLocation} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const {search} = useLocation();
  console.log(search);

  useEffect(()=>{
    const fetchPosts = async ()=>{
     const result = await axios.get(`/posts${search}`)
     setPosts(result.data.data)
     return result.data;
    }
    fetchPosts();
  },[search])
  return (
    <>
      <Header />
      <div className="home">
          <Posts posts={posts}/>
          <SideBar/>
      </div>
    </>
  );
};

export default Home;
