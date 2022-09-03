import "./header.css";
import image1 from "../../images/4.jpg"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">ADEKYEE SPORTS</span>
        <span className="headerTitleLg">& MORE</span>
      </div>
      <img
        className="headerImg"
        src={image1}
        alt=""
      />
    </div>
  );
}
