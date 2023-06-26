import Carousel from "react-bootstrap/Carousel";
import NaviTab from "./navbar";
import main_image from "../Images/bg_img.jpg";
import "./Title.css";
function Title() {
  return (
    <div className="bg-title">
      <NaviTab></NaviTab>
      <p className="txt_main">Welcome to our Trading Site</p>
      <br></br>
      <img src={main_image} className="main_img"/>
    </div>
  );
}

export default Title;
