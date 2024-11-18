import React from 'react';
import { motion } from 'framer-motion';
import imgLogo from "../assets/laptop.jpg"
import { FaCode, FaServer, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks} from 'react-icons/si';
import Footer from './footer';

const Activity = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <FaCode size={30} />,
      items: ["React.js","Tailwind CSS", "Redux","HTML","CSS","JavaScript","GSAP"]
    },
    {
      category: "Backend Development",
      icon: <FaServer size={30} />,
      items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication","RAZORPAY Integration"]
    },
    {
      category: "Database & Tools",
      icon: <FaDatabase size={30} />,
      items: ["MongoDB", "Git","Postman","Cloudinary","JWT","Google Colab"]
    },
    {
      category: "DSA & Problem Solving",
      icon: <FaBrain size={30} />,
      items: ["Data Structures", "Algorithms", "Time Complexity", "Space Optimization"]
    },
    {
      category: "Machine Learning",
      icon: <FaBrain size={30} />,
      items: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn","Scikit-learn","NLP","TextBlob","NLTK","TextPreprocessing"]
    }
  ];

  const codingProfiles = [
    {
      platform: "LeetCode",
      icon: <SiLeetcode size={40} />,
      stats: {
        problems: "400+",
        rating: "1463",
        contests: "15+"
      },
      link: "https://leetcode.com/u/karan_gupta982/"
    },
    {
      platform: "GeeksforGeeks",
      icon: <SiGeeksforgeeks size={40} />,
      stats: {
        problems: "50+",
        score: "166",
        institute: "Top 10%"
      },
      link: "https://www.geeksforgeeks.org/user/guptakay46g/"
    }
  ];

  return (
    <>
        <div className="bg-richblack-900 min-h-screen text-white">
        
        <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
            <div 
            className="absolute inset-0 bg-center  w-full bg-cover "
            style={{ 
                backgroundImage: `url(${imgLogo})`,
                transform: 'translateY(var(--parallax-y))'
            }}
            >
            <div className="absolute inset-0 bg-black/60" />
            </div>
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold relative z-10 text-center overflow-visible top-[-12vh] "
            >
            My Technical Journey
            </motion.h1>
        </div>

        
        <div className="container mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold mb-12 text-center overflow-visible">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-visible">
            {skills.map((skill, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-richblack-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all"
                >
                <div className="flex items-center gap-4 mb-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                        {item}
                    </li>
                    ))}
                </ul>
                </motion.div>
            ))}
            </div>
        </div>

        
        <div className="bg-richblack-800 py-20">
            <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center overflow-visible">Coding Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {codingProfiles.map((profile, index) => (
                <motion.a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-richblack-900 p-6 rounded-lg hover:bg-richblack-700 transition-all"
                >
                    <div className="flex items-center gap-4 mb-6">
                    {profile.icon}
                    <h3 className="text-2xl font-semibold">{profile.platform}</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                    {Object.entries(profile.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-500">{value}</div>
                        <div className="text-sm text-gray-400">{key}</div>
                        </div>
                    ))}
                    </div>
                </motion.a>
                ))}
            </div>
            </div>
        </div>

        
        <div className="container mx-auto px-4 py-20 ">
            <h2 className="text-4xl font-bold mb-12 text-center overflow-visible ">Current Activities</h2>
            <div className=" flex flex-col gap-[2vh] ">


            <div className='h-[26vh] overflow-visible'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 20 }}
                className="bg-richblack-800 p-6 rounded-lg "
            >
                <h3 className="text-2xl font-semibold mb-4">Looking for Internships</h3>
                <p className="text-gray-300">
                    Actively seeking software development internship opportunities where I can apply my skills in full-stack development, particularly with React, Node.js, and modern web technologies. Eager to contribute to meaningful projects while learning from experienced developers in a professional environment.
                </p>
            </motion.div>
            </div>

            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-richblack-800 p-6 rounded-lg"
                >
                    <h3 className="text-2xl font-semibold mb-4">Building NLP Project</h3>
                    <p className="text-gray-300">
        Currently developing a Natural Language Processing (NLP) project that leverages machine learning algorithms to analyze and process text data. Working with Python, sciket learn and NLTK to build models for text classification, sentiment analysis, and language understanding. This project aims to demonstrate practical applications of NLP in real-world scenarios while deepening my understanding of machine learning concepts, working on quora dataset for merging multiple question having same answer together.
                    </p>
                </motion.div>
            </div>

            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-richblack-800 p-6 rounded-lg"
                >
                    <h3 className="text-2xl font-semibold mb-4">Maintaining Leetcode Daily Streek</h3>
                    <p className="text-gray-300">
                    Consistently solving LeetCode's daily coding challenges for more than 4 months, strengthening my problem-solving abilities and algorithmic thinking. This daily practice has helped me develop a deeper understanding of data structures, algorithms, and optimization techniques while preparing for technical interviews.
                    </p>
                </motion.div>
            </div>
            
            </div>
        </div>
        </div>
        <Footer/>
    </>
  );
};

export default Activity;