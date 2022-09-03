import Post from "../post/Post";
import "./posts.css";
import image1 from "../../images/1.jpg"
import image2 from "../../images/2.jpg"
import image3 from "../../images/3.jpg"
import image4 from "../../images/4.jpg"

export default function Posts() {
  return (
    <div className="posts">
      <Post img={image1} />
      <Post img={image2} />
      <Post img={image3} />
      <Post img={image4} />
      <Post img={image4} />
    </div>
  );
}
