import image1 from "../../images/5.jpg";

import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <img className="topIcon fab fa-football-o" src="" />
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topIcon topListItem">Home</li>
          <li className="topIcon topListItem">Categories</li>
          <li className="topIcon topListItem">Latest</li>
          <li className="topIcon topListItem">Admin</li>
          <li className="topIcon topListItem">Promotions</li>
        </ul>
      </div>
      <div className="topRight">
        <img src={image1} className="topImg" />
        <ul className="topList">
          <li className="topListItem">login</li>
          <li className="topListItem">Sign Up</li>
        </ul>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
