import React from 'react';
import passport from "./Passportsize.jpeg";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { TbBracketsAngle } from "react-icons/tb";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = React.forwardRef((props, ref) => {
  return (
    <div className="about-container" ref={ref}>
      <div className="about-me">
        <h1 className="heading">About me:</h1>
        <div className="content">
          <p className="paragraph">
            I am <span className="highlighted-name">Rakesh</span>, specializing in Front End Design and am passionate about creating immersive, user-centric digital experiences. I thrive in collaborative environments where creativity leads to innovation. I love tackling technical challenges, from developing intuitive frontends to building robust web servers. Additionally, I have experience with cross-platform mobile app development.
          </p>
          <img
            src={passport}
            alt="Profile"
            className="profile-image"
          />
        </div> {/* <-- Closing tag for content */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-around align-items-center position-sticky top-100 start-50 translate-middle" id="sticky">
          <Link to='/'id="na"><FaHome size={25} /></Link>
          <Link to='/about'id="na"><CgProfile size={25} /></Link>
          <Link to='/education'id="na"><FaGraduationCap size={25} /></Link>
          <Link to='/projects'id="na"><HiMiniComputerDesktop size={25} /></Link>
          <Link to='/skills'id="na"><TbBracketsAngle size={25} /></Link>
          <Link to='/message'id="na"><AiOutlineMessage size={25} /></Link>
        </div>
      </div> 
    </div> 
  );
});

export default About;
