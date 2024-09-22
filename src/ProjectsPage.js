import React from "react";
import "./ProjectsPage.css"; // Import the CSS for styling
import projectData from "./projectData";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { TbBracketsAngle } from "react-icons/tb";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6"; // Import project data
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="technology">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer" 
            >
              View Project
            </a>
          </div>
        ))}
        <div className=" d-flex justify-content-around align-items-center position-sticky top-100 start-50 translate-middle" id="sticky">
        <Link to='/'id="na"><FaHome  size={25} /></Link>
    <Link to='/about'id="na"><CgProfile size={25}  /></Link>
    <Link to='/education'id="na"><FaGraduationCap size={25} /></Link>
    <Link to='/projects'id="na"><HiMiniComputerDesktop  size={25}/></Link>
   <Link to='/skills'id="na"><TbBracketsAngle size={25}/></Link> 
   <Link to='/message'id="na"> <AiOutlineMessage  size={25}/></Link>
    </div>
      </div>
      
    </div>
  );
};

export default ProjectsPage;
