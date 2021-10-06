import "./Post.css";
import {Link} from "react-router-dom";

const Post = ({creatPosts}) => {
  const IMAGE_PATH =
  creatPosts.img?.slice(creatPosts.img.lastIndexOf("\\") + 1, creatPosts.img.length) ||
  "";
  return (
    <div className="post">
      {
      creatPosts.img &&
        <img
        className="postImg"
        src={`/images/${IMAGE_PATH}`}
        alt=""
      />
      }
      <div className="postInfo">
        <div className="postCat">
          {
            creatPosts.categories.map((item)=>{
             return <span key={creatPosts._id}  className="postCat">{item}</span>
            })
          }
        </div>
        <Link to={{pathname:`/post:${creatPosts._id}`}} className="link">
          <span className="postTitle">{creatPosts.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(creatPosts.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{creatPosts.description}</p>
    </div>
  );
};

export default Post;
