import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Added faChevronDown
import { fab } from "@fortawesome/free-brands-svg-icons"; // Import the CSS file
import { CgProfile } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { TbBracketsAngle } from "react-icons/tb";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EmailForm = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      to_email: to,
      subject: subject,
      message: text,
    };

    emailjs.send('service_e5p283l', 'template_ttj7y98', templateParams, '2NqNJ-r9muKRqnErt')
      .then((result) => {
        setStatus('Email sent successfully!');
      }, (error) => {
        setStatus('Failed to send email.');
      });
  };

  return (
    <>
   <div className='entire'>
    <form onSubmit={handleSubmit} className="email-form">
         <div><h1>Contact me:</h1></div>
         <hr></hr>
      <input
        type="email"
        name="to_email"
        placeholder="Your's Email"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        required
        className="email-input"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
        className="email-input"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        className="email-textarea"
      />
      <button type="submit" className="email-button">Send Email</button>
      <p className="email-status">{status}</p>
    </form>
    <br></br>
    <div  className="d-flex justify-content-center align-items-center"><h1 style={{color:'black'}}>Contact me</h1></div>
    <br></br>
    <div className="d-flex justify-content-center align-items-center">
  
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
              
            </a>
            </div>
   </div>
   <div className=" d-flex justify-content-around align-items-center position-sticky top-100 start-50 translate-middle" id="sticky">
     <Link to='/'id="na"><FaHome  size={25} /></Link>
   <Link to='/about'id="na"><CgProfile size={25}  /></Link>
   <Link to='/education'id="na"><FaGraduationCap size={25} /></Link>
   <Link to='/projects'id="na"><HiMiniComputerDesktop  size={25}/></Link>
  <Link to='/skills'id="na"><TbBracketsAngle size={25}/></Link> 
  <Link to='/message'id="na"> <AiOutlineMessage  size={25}/></Link>
   </div>
   </>
  );
};

export default EmailForm;
