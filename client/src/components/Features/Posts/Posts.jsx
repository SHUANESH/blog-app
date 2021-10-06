import Post from "../Post/Post";
import "./Posts.css";


const Posts = ({ posts }) => {
  return (
    <div className="posts">
     {
         posts.map((item)=>(
            <Post key={item._id} creatPosts={item} />
         ))
     }

    </div>
  );
};

export default Posts;
