import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaFigma, FaAws, FaAndroid, FaDatabase, FaNodeJs, FaReact, FaCode } from 'react-icons/fa';
import { SiJavascript, SiFirebase, SiMicrosoftazure } from 'react-icons/si';
import { CgProfile } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { TbBracketsAngle } from "react-icons/tb";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Skills = React.forwardRef((props, ref) => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Azure', icon: <SiMicrosoftazure /> },
    { name: 'Android Development', icon: <FaAndroid /> },
    { name: 'Database Management', icon: <FaDatabase /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Data Structures', icon: <FaCode /> },
  ];

  return (
    <div className="skills-container" style={{backgroundColor:'#161616',color:'white',height:'800px'}} ref={ref}>
      <h2 >Tech I Am Familiar With</h2>
    
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-box">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
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
  );
});

export default Skills;

