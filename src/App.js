import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom"; 
import About from "./About";
import Education from "./Education";
import Message from "./Message";
import Skills from "./Skills";
import myprofile from "./myprofile.png";
import ResumePDF from "./Resume R.pdf";
import ProjectsPage from "./ProjectsPage"; // Import ProjectsPage component
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope ,faDownload} from "@fortawesome/free-solid-svg-icons"; // Added faChevronDown
import { fab } from "@fortawesome/free-brands-svg-icons"; //
import { CgProfile } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { TbBracketsAngle } from "react-icons/tb";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
function App() {
  return(

    <>

    <div className="d-flex justify-content-center  align-items-center " style={{backgroundColor:'#161616',color:'white',height:'800px'}}>
        <div style={{width:'400px'}}>
            <div>
              <h1>Hi , I'm <span className="highlighted-name"> Rakesh </span></h1>
              <h6>I learn. I buidl. I ship.</h6>
              <div className="d-flex justify-content-around align-items-center">
              <a href="tel:+919849066299" target="_blank" rel="noopener noreferrer">
          
              <FontAwesomeIcon icon={faPhone} className="phone-icon"  aria-hidden="true" />
              
            </a>
            <a href="mailto:21pa1a1227@vishnu.edu.in" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="phone-icon" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/doddipatla-rakesh-01b84423a/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={fab.faLinkedin} className="phone-icon" aria-hidden="true" />
            </a>
            <a href="https://github.com/D-RAKESH-A1227" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={fab.faGithub} className="phone-icon" aria-hidden="true" />
              {/* Changed to GitHub icon */}
            </a>
            </div>
            <br></br>
            <div className="buttons" style={{color:'#7c7c7c'}}>
            <button className="resume-button" onClick={() => window.open(ResumePDF)}>
              Resume <FontAwesomeIcon icon={faDownload} aria-hidden="true" />
            </button>
            </div>
            </div>
        </div>
           
        <div style={{width:'500px'}}>
        <img src={myprofile} alt='' style={{width:'500px',height:'500px',objectFit:'cover'}}/>
        </div>

    </div>
    <div className=" d-flex justify-content-around align-items-center position-sticky top-100 start-50 translate-middle" id="sticky" style={{color:"#262626"}}>
    <Link to='/' id="na"><FaHome  size={25} /></Link>
    <Link to='/about' id="na"><CgProfile size={25}  /></Link>
    <Link to='/education' id="na"><FaGraduationCap size={25} /></Link>
    <Link to='/projects' id="na"><HiMiniComputerDesktop  size={25}/></Link>
   <Link to='/skills' id="na"><TbBracketsAngle size={25}/></Link> 
   <Link to='/message' id="na"> <AiOutlineMessage  size={25}/></Link>
  
    </div>

  

    </> 
  )
}

function Contacts() {
  return <h2>Contacts</h2>;
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/message" element={<Message />} />

        {/* Add ProjectsPage route */}
      </Routes>
    </Router>
  );
}

export default AppWrapper;
