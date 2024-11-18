import React from "react"
import Logo from "../assets/logowithoutBG.png"
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagramSquare, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white w-[100vw]">
      <div className="flex justify-center items-center h-[25vh]">
        <img src={Logo} alt="Logo" className="scale-50 overflow-hidden" />
      </div>
      <hr className="h-[3px] bg-richblack-900 opacity-50"/>
      <div className="flex gap-[2vw] justify-center items-center h-[15vh] text-xl">
        {/* <a href={`#${ids.home}`} className="footer-link">Home</a> */}
        <Link to="/activity" className="footer-link">Activity</Link>
        <Link to="/recentwork" className="footer-link">Recent Work</Link>
        {/* <a href={`#${ids.aboutMe}`} className="footer-link">About Me</a> */}
        <Link to="/contact" className="footer-link">Contact Me</Link>
      </div>
      <hr className="h-[3px] bg-richblack-900 opacity-50"/>
      <div className="flex gap-[2vw] h-[15vh] justify-center items-center">

      <a 
        href="mailto:gupta.karan.gh@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
      >
        <FaEnvelope size={30}/>
      </a>

        <a href="https://github.com/karangupta982" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub size={30}/>
        </a>
        <a href={"https://www.linkedin.com/in/karan-gupta10/"} target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin  size={30}/></a>
        <a href={"https://www.instagram.com/karangupta982/"} target="_blank" rel="noopener noreferrer" className="social-icon" ><FaInstagramSquare size={30}/></a>
        <a href={"https://x.com/karan__gupt_a"} target="_blank" rel="noopener noreferrer" className="social-icon" ><FaSquareXTwitter size={30} /></a>
      </div>
    </div>
  );
};

export default Footer;
