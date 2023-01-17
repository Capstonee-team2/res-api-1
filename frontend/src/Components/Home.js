import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homevid from "./Real 4K HDR 60fps Sony Food Fizzle in HDR.mp4";
const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <video src={homevid} autoPlay loop muted />
        <div className="content">
          <h1>Welcome</h1>
          <p>OMI YAMI</p>
          <p className="p-home">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            tenetur sequi corporis eaque quisquam. Consequatur fugit quisquam
            ratione molestias modi aliquid, tempore id deserunt aut dolorem
            possimus, temporibus harum ipsa!
          </p>
          <Link to="/foods">
            <button className="button-17" style={{ backgroundColor: "orange" }}>
              FOOD LIST
            </button>
          </Link>
          <button className="button-17" style={{ width: "200px" }}>
            +216 00 000 000
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
