import React from "react";
import { TypeAnimation } from 'react-type-animation';
import imgLogo from "../assets/imgLogo.jpg";
import HighlightText from "./HighLightText";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight, FaArrowDown } from "react-icons/fa";
import ContactUsForm from "../components/ContactUsform";
import Block from "./block";
import Footer from "./footer";
import { motion } from "framer-motion";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Home = ({ids}) => {
  const aboutRef = useIntersectionObserver();
  const contactRef = useIntersectionObserver();
  
  return (
    <>
      
      <div className="flex w-full min-h-screen bg-richblack-900 flex-col md:flex-row relative">
        
        <div className="w-full md:w-1/2 h-screen flex flex-col justify-center px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <TypeAnimation 
              className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold"
              sequence={[
                'Hi I am Karan Gupta.',
                1000,
                'I am a MERN Stack developer.',
                1000,
                'I am an NLP enthusiast.',
                1000,
                'I am a problem solver.',
                1000,
                'I Love to create animations.',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
              Passionate full-stack developer specializing in MERN stack development. 
              Creating innovative web solutions with a focus on user experience and performance.
            </p>

          <div className="flex gap-4 overflow-hidden p-2">
            <Link to="/recentwork">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-black px-6 py-3 rounded-lg font-semibold overflow-hidden"
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ backgroundColor: '#1FA2FF', color: 'black' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#1FA2FF] text-white px-6 py-3 rounded-lg font-semibold overflow-hidden "
              >
                Contact Me
              </motion.button>
            </Link>
          </div>

          </motion.div>
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center items-center py-10 md:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white mx-3 shadow-[20px_20px_rgba(255,255,255)] rounded-lg overflow-hidden"
          >
            <img 
              src={imgLogo} 
              alt="ProfilePic" 
              className="h-[50vh] md:h-[70vh] object-cover transform hover:scale-105 transition-transform duration-300" 
            />
          </motion.div>
        </div>

        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <FaArrowDown size={24} />
        </motion.div>
      </div>

     
      <div className="w-full bg-white py-20 fade-in" ref={aboutRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container mx-auto px-6 md:px-16"
        >
          <h1 className="text-center text-5xl font-bold mb-16 overflow-visible"> 
            About <HighlightText text={'Me'}/>
          </h1>
          
          <div className="max-w-4xl mx-auto text-richblack-900 text-lg md:text-xl space-y-6">
            <FaQuoteLeft className="text-3xl text-blue-500 mb-4"/>
            <p>
              Hello! I'm Karan Gupta, a Computer Science Engineering student at the University Institute of Technology, RGPV Bhopal (2026). With a strong academic background of <Block text="96.6%"/> in 12th grade and <Block text="94%"/> in 10th grade, I've always been passionate about technology and innovation.
            </p>
            <p>
              For the past <Block text="Two Years"/>, I've immersed myself in the <Block text="MERN"/> stack ecosystem, building various full-stack applications that solve real-world problems. My journey in web development has been driven by a desire to create intuitive, efficient, and scalable solutions.
            </p>
            <p>
              Beyond development, I'm an avid problem solver who enjoys participating in coding contests and exploring new technologies. I believe in continuous learning and staying updated with the latest industry trends.
            </p>
            <div className="text-right">
              <FaQuoteRight className="text-3xl text-blue-500 inline-block"/>
            </div>
          </div>
        </motion.div>
      </div>

      
      <div ref={contactRef} className="bg-richblack-900 py-20" id="contactMe">
        <div className="container mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 overflow-visible"
              >
                Let's Connect
              </motion.h1>
              <p className="text-gray-400 text-lg md:text-xl">
                Ready to start a project or just want to chat? Feel free to reach out!
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;