import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = () => {
  console.log("dfsdfsdfsdgsg");
  const [post, setPost] = useState([]);
  const location = useLocation();
  console.log(location);
  const [data,path] = location.pathname.split(":");
  console.log(path);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data.data);
    };
    getPost();
  debugger
  }, [path]);

  const IMAGE_PATH =
  post.img?.slice(post.img.lastIndexOf("\\") + 1, post.img.length) ||
  "";
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.img && (
          <img 
           className="singlePostImg" 
           src={`/images/${IMAGE_PATH}`}
           alt="" 
           />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
              <Link to={`/?user=${post.username}`} className="link" >
                <b>{post.username}</b> 
              </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
