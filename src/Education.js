import React from 'react';
import educate from "./educate.png";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { TbBracketsAngle } from "react-icons/tb";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Eduaction() {
  return (
    <>
    <div
  className="d-flex justify-content-around align-items-center"
  style={{ width: '1600px', backgroundColor: '#161616' }}
>
    <img src={educate} alt='' style={{width:'200px',height:'200px'}}/>
    </div>
    <div className="experience">
    <h2>EDUCATION</h2>
    <div className="experience-item">
      <h4>Bachelor's Of Technologies</h4>
      <p>
        Vishnu Institute Of Technology <span className="date">| 2021-2025</span>
      </p>
    </div>
    <div className="experience-item">
      <h4>Intermediate</h4>
      <p>
        Tirumala Junior College <span className="date">| 2019-2021</span>
      </p>
    </div>
    <div className="experience-item">
      <h4>Secondary School </h4>
      <p>
        Tirumala [E.M] School <span className="date">| 2018-2029</span>
      </p>
      
   
   </div> 
   <div className=" d-flex justify-content-around align-items-center position-sticky top-100 start-50 translate-middle" id="sticky">
   <Link to='/'id="na"><FaHome  size={25} /></Link>
    <Link to='/about'id="na"><CgProfile size={25}  /></Link>
    <Link to='/education'id="na"><FaGraduationCap size={25} /></Link>
    <Link to='/projects'id="na"><HiMiniComputerDesktop  size={25}/></Link>
   <Link to='/skills'id="na"><TbBracketsAngle size={25}/></Link> 
   <Link to='/message'id="na"> <AiOutlineMessage  size={25}/></Link>
    </div>
  </div>
  </>
  )
}

export default Eduaction;
