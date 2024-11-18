import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Footer from './footer.jsx';
import ApniCoaching_img from "../assets/ApniCoaching_img.jpeg";
import TaskManager_img from "../assets/taskmanager.png";
import SecureAuth_img from "../assets/authsystem.png";
import GlobalWeather_img from "../assets/globalweather.png";
import UniquePasswordGenerator_img from "../assets/passwordgenerator.png";    



const RecentWork = () => {
  const projects = [
    {
        title: "Apni Coaching - Online Learning Platform",
        description: "A comprehensive ed-tech platform built with MERN stack that enables instructors to create and manage courses while providing students with a seamless learning experience. Features include secure authentication, payment integration, and a resource hub for engineering career paths.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JWT", "Razorpay"],
        image: ApniCoaching_img, // You should add your project's actual screenshot
        github: "https://github.com/karangupta982/ApniCoaching",
        live: "https://apnicoaching.netlify.app/",
        highlights: [
          "Built instructor dashboard for course management and student tracking",
          "Implemented secure JWT authentication and Razorpay payment integration",
          "Created responsive UI with Tailwind CSS for all device sizes",
          "Developed resource hub for engineering career guidance",
          "Integrated course review and rating system"
        ]
      },

      
      {
        title: "Task Manager Application",
        description: "A dynamic task management application built with React, featuring an engaging animated background. Users can manage tasks with different priority levels, search functionality, and real-time updates.",
        technologies: ["React.js", "GSAP", "JavaScript", "Tailwind CSS"],
        image: TaskManager_img,
        github: "https://github.com/karangupta982/Task-manager",
        live: "https://v10tasksmanager.netlify.app/",
        highlights: [
          "Implemented dynamic circle animation using GSAP",
          "Created responsive task management interface",
          "Built real-time search functionality",
          "Designed priority-based task organization",
          "Added interactive task completion toggles"
        ]
      },


      {
        title: "Secure User Authentication System",
        description: "A robust MERN stack authentication system with advanced security features including JWT-based authentication, session management, and CSRF protection. Designed to provide secure user registration, login, and access control.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Bcrypt"],
        image: SecureAuth_img,
        github: "https://github.com/karangupta982/secure-auth-system",
        live: "https://secure-auth-system.netlify.app/",
        highlights: [
          "Implemented bcrypt password hashing with salt rounds",
          "Built custom CSRF protection with session management",
          "Created secure cookie handling with HttpOnly flags",
          "Developed JWT-based authentication system",
          "Added input validation and sanitization"
        ]
      },


      {
        title: "Global Weather",
        description: "A weather application that provides real-time weather information for any location worldwide. Features include geolocation detection, current weather conditions display with temperature, wind speed and humidity data.",
        technologies: ["Java script", "Api", "HTML", "CSS"],
        image: GlobalWeather_img,
        github: "https://github.com/karangupta982/Global-Weather",
        live: "https://global-weather-api.onrender.com/",
        highlights: [
          "Utilized geolocation technology to detect the user's current location and provide weather updates accordingly.",
          "Real-time weather conditions, including temperature in Celsius , wind speed and humidity.",          
        ]
      },


      {
        title: "Unique Password Generator",
        description: "A password generator that creates unique passwords for users based on their preferences for length, complexity, and character types.",
        technologies: ["Java script", "HTML", "CSS"],
        image: UniquePasswordGenerator_img,
        github: "https://github.com/karangupta982/Password-generator",
        live: "https://password-generator-tth9.onrender.com/",
        highlights: [
            "It crafts secure and personalized passwords effortlessly that can be copied also.",
          "Designed to provide users with a convenient and secure way to generate strong passwords.", 
          "Customizable composition, flexible length, user friendly interface, password security indicator."
        ]
      },
    
  ];

  return (
    <>
        <div className="bg-richblack-900 min-h-screen text-white py-20">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-20"
        >
            <h1 className="text-5xl font-bold mb-4 h-[10vh] ">Recent Projects</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and passion for web development.
            </p>
        </motion.div>

        
        <div className="container mx-auto px-4 overflow-visible">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 overflow-visible">
            {projects.map((project, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-richblack-800 rounded-xl overflow-hidden group"
                >
                
                <div className="relative overflow-hidden h-64">
                    <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                    >
                        <FaExternalLinkAlt size={20} />
                    </a>
                    </div>
                </div>

                
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                        <span 
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>

                    
                    <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                        {highlight}
                        </li>
                    ))}
                    </ul>
                </div>
                </motion.div>
            ))}
            </div>
        </div>

        
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-20"
        >
            <h2 className="text-3xl font-bold mb-6">Interested in collaborating?</h2>
            <Link 
            to={"/contact"}
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
            Get in Touch
            </Link>
        </motion.div>
        </div>
        <Footer/>
    </>
  );
};

export default RecentWork;